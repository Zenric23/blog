import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { publicRequest } from "../../../util/axiosRequest";
import Post from "../../ui/Post";
import { Empty } from "../Home/styles/body.styled";
import { Nav, PostCon, StyledBody } from "./styles/body.styled";

const Body = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const { id } = useParams(); 

  const getBlogs = async () => {
    try {
      const res = await publicRequest.get(`/post/${id}?authorBlogs=1`);
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [id]);

  return (
    <StyledBody>
      <Nav>
        <span>Blogs</span>
      </Nav>
      <PostCon>
        {blogs?.map((blog) => (
          <Post
            author={blog.author?.username}
            date={blog.createdAt}
            desc={blog.desc}
            id={blog._id}
            title={blog.title}
            topic={blog.topic}
            key={blog._id}
          />
        ))}
        {
          blogs.length === 0 && (
            <Empty>No blogs yet</Empty>
          )
        }
      </PostCon>
    </StyledBody>
  );
};

export default Body;
