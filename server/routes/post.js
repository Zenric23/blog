const Post = require("../Model/Post");
const User = require("../Model/User");
const router = require("express").Router();
const { verifyToken } = require("./verifyToken");
const multer = require("multer");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const fs = require('fs');
const User_liked = require("../Model/User_liked");
const { find } = require("../Model/User_liked");

const DIR = "Images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename =
      new Date().getTime().toString() + file.originalname.split(" ").join("-");
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //         cb(null, true);
  //     } else {
  //         cb(null, false);
  //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //     }
  // }
});




router.post("/", upload.single("blog-image"), async (req, res) => {
  const { title, desc, topic, author } = req.body;
  const filename = req.file.filename;

  try {
    const url = req.protocol + "://" + req.get("host");
    const img = url + "/Images/" + filename;

    const newBlog = new Post({
      title,
      desc,
      topic,
      author,
      img,
    });

    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/top-writers", async (req, res) => {
  try {
    const topAuthors = await Post.aggregate([
      {
        $project: {
          author: 1,
          likes: {
            $size: "$like",
          },
          _id: 0,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ["$user", 0],
              },
              "$$ROOT",
            ],
          },
        },
      },
      {
        $group: {
          _id: "$author",
          likes: {
            $sum: "$likes",
          },
          name: {
            $first: "$username",
          },
          img: {
            $first: "$img",
          },
        },
      },
      {
        $limit: 8,
      },
    ]);

    res.status(200).json(topAuthors);
  } catch (error) {
    console.log(error);
    res.status(500).json(500);
  }
});

router.get("/relevant-topic", async (req, res) => {
  try {
    const relevantTopics = await Post.find({
      topic: req.query.topic,
      _id: { $ne: req.query.id },
    })
      .limit(5)
      .populate("author");

    res.status(200).json(relevantTopics);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/get-likes', async (req, res)=> {
  const { userId, blogId } = req.query
  try {
    const totalLikes = await User_liked.find({userId, blogId}).count() || 0
    const isLiked = await User_liked.findOne({userId, blogId}) ? true : false
    res.status(200).json({isLiked, totalLikes})
  } catch (error) {
    console.log(error)
  }
})

router.get("/", async (req, res) => {
  const page = req.query.p;
  const postPerPage = req.query.limit || 0;

  const topic = req.query.topic || "";
  const sort = req.query.sort || "";
  let posts;
  let total = 0;

  try {
    if (!topic || topic === "all") {
      if (sort) {
        posts = await Post.find()
          .skip(page * postPerPage)
          .limit(postPerPage)
          .populate({ path: "author", select: { img: 1, username: 1 } })
          .sort(
            sort === "latest"
              ? { createdAt: -1 }
              : sort === "popular"
              ? { likes: -1 }
              : {}
          );
        total = await Post.find()
          .sort(
            sort === "latest"
              ? { createdAt: -1 }
              : sort === "popular"
              ? { likes: -1 }
              : {}
          )
          .count();
      } else {
        posts = await Post.find()
          .skip(page * postPerPage)
          .limit(postPerPage)
          .populate({ path: "author", select: { img: 1, username: 1 } });
        total = await Post.find().count();
      }
    } else {
      if (sort) {
        posts = await Post.find({ topic })
          .skip(page * postPerPage)
          .limit(postPerPage)
          .populate({ path: "author", select: { img: 1, username: 1 } })
          .sort(
            sort === "latest"
              ? { createdAt: -1 }
              : sort === "popular"
              ? { likes: -1 }
              : {}
          );
        total = await Post.find()
          .sort(
            sort === "latest"
              ? { createdAt: -1 }
              : sort === "popular"
              ? { likes: -1 }
              : {}
          )
          .count();
      } else {
        posts = await Post.find({ topic })
          .skip(page * postPerPage)
          .limit(postPerPage)
          .populate({ path: "author", select: { img: 1, username: 1 } });
        total = await Post.find().count();
      }
    }

    res.status(200).json({ posts, total });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  let post;
  try {
    if (req.query.authorBlogs) {
      post = await Post.find(
        { author: req.params.id },
        { title: 1, desc: 1, createdAt: 1, topic: 1 }
      ).populate({
        path: "author",
        select: {
          username: 1,
        },
      });
    } else if (req.query.topBlogs) {
      post = await Post.aggregate([
        {
          $match: { author: ObjectId(req.params.id) },
        },
        {
          $project: {
            likes: {
              $size: "$like",
            },
            other: "$$ROOT",
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                "$other",
                {
                  likes: "$likes",
                },
              ],
            },
          },
        },
        {
          $project: {
            img: 0,
            like: 0,
            desc: 0,
            topic: 0,
          },
        },
        {
          $sort: { likes: -1 },
        },
        {
          $limit: 6,
        },
      ]);

      await Post.populate(post, {
        path: "author",
        select: {
          username: 1,
        },
      });

    } else if (req.query.userInfo) {

      post = await Post.aggregate([
        {
          $match: { author: ObjectId(req.params.id) }
        },
        {
          $project: {
            likes: {$size: "$like"},
            authorId: "$author"
          }
        },
        {
          $group: {
            _id: "$authorId",
            likes: {
              $sum: "$likes"
            },
            author: {
              $first: "$authorId"
            }
          },
        }
      ]);

      await Post.populate(post, {
        path: "author",
        select: {
           username: 1,
           img: 1,
           _id: 0
        }
      })

    } else {
      post = await Post.findById(req.params.id).populate("author");
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}); 


router.put("/like-blog/:id", async (req, res) => {
  const { userId } = req.body
  const blogId = req.params.id
  let isLiked
  let totalLikes
  try {
    const isAlreadyLiked = await User_liked.findOne({userId, blogId})
    if(isAlreadyLiked){
      await User_liked.findOneAndDelete({userId, blogId})
      isLiked = false
      totalLikes = 0
    } else {
      const newUserLiked = new User_liked({
        userId,
        blogId,
      })
      await newUserLiked.save()
      totalLikes = await User_liked.find({userId, blogId}).count()
      isLiked = true
    }
    res.status(200).json({isLiked, totalLikes});
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});


router.delete("/:id", async (req, res)=> {
  try {
    await Post.findByIdAndDelete(req.params.id)

    res.status(200).json('blog delete successfully')
  } catch (error) {
    console.log(error)
  } 
}) 

const unlinkPromise = (path) => new Promise((resolve, reject)=> {
  fs.unlink(path, (err)=> {
    if(err) reject(err)
    resolve(path)
  })  
})

router.delete("/file/:filename", async (req, res)=> {
  const filename  = req.params.filename
  const directoryPath = "../server/Images/"
 
  try {
    const deletedFile =  await unlinkPromise(directoryPath + filename)
    res.status(200).json(`${deletedFile} is deleted`)
  } catch (error) {
    console.log(error)
  }
})  

module.exports = router;
