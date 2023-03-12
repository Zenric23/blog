import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Body from '../components/pages/Blog_read/Body'
import Side from '../components/pages/Blog_read/Side'
import HomeNavbar from '../components/pages/Home/Navbar'
import { Container } from '../components/ui/util/container.styled'
import { BodyFlex } from '../components/ui/util/flex.styled'
import { UserContext } from '../context/userContext'
import { publicRequest } from '../util/axiosRequest'

const Blog_read = () => {
  const [blog, setBlog] = useState<any>({})
  const [likes, setLikes] = useState<number>(0)
  const [isLike, setIsLike] = useState<boolean>(false)
  const {state} = useContext(UserContext)
  

  const { id } = useParams()

  useEffect(()=> { 
    const getBlog = async () => {
      try {
        const res = await publicRequest.get(`/post/${id}`)
        res && setBlog(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlog()
  }, []) 
  
  useEffect(()=> {
    const getBlogLikes = async () => {
      try {
        const res =  await publicRequest.get(`/post/get-likes?userId=${state.user?._id}&blogId=${id}`) 
        setLikes(res.data.totalLikes) 
        setIsLike(res.data.isLiked)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogLikes()
  }, [])

  const handleLikePost = async (): Promise<void> => {
    try {
      const res =  await publicRequest.put(`/post/like-blog/${blog._id}`, {
        userId: state.user?._id
      })
      setLikes(res.data.totalLikes)
      setIsLike(res.data.isLiked)
    } catch (error) {   
      console.log(error)
    }
  } 
  
  return (
    <> 
    {
      state.user ? (
        <Navbar />
      ) : (
        <HomeNavbar isRead={true} />
      )
    }
      <Container>
          {
            Object.keys(blog).length > 0 && (
              <BodyFlex>
                <Body handleLikePost={handleLikePost} totalLikes={likes} isLike={isLike} blog={blog} />
                <Side id={blog._id} topic={blog.topic} />
              </BodyFlex>
            )
          }
      </Container>
    </>
  )
}

export default Blog_read