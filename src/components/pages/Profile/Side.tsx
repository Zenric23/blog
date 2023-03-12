import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../context/userContext";
import { publicRequest } from "../../../util/axiosRequest";
import FeaturePost from "../../ui/FeaturePost";
import Footer from "../../ui/Footer";
import {
  Avatar,
  Likes,
  Name,
  StyledSide,
  Title,
  TopBlogCon,
  UserAvatar,
} from "./styles/side.styled";


const EmptyTopBlog = styled.div`
  font-size: 14px;
  opacity: 0.5;
`

const Side = () => {
  const [author, setAuthor] = useState<any>({});
  const [topBlogs, setTopBlogs] = useState<any[]>([]);
  const { id } = useParams();
  const {state} = useContext(UserContext)

  console.log(author)
  const getAuthor = async () => {
    try {
      const res = await publicRequest.get(`/post/${id}?userInfo=1`);
      setAuthor(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopBlogs = async () => {
    try {
      const res = await publicRequest.get(`/post/${id}?topBlogs=1`);
      setTopBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthor();
    getTopBlogs();
  }, [id]);
  
  console.log(author);

  return (
    <StyledSide>
      <UserAvatar>
        <Avatar src={author?.author?.img || state.user?.img} />
        <Name>{author?.author?.username || state.user?.username}</Name>
        <Likes>{author?.likes || 0} Likes</Likes>
      </UserAvatar>
      <TopBlogCon>
        <Title>TOP BLOG</Title>
        {topBlogs.length > 0 && topBlogs.map((blog) => (
          <FeaturePost
            key={blog._id}
            author={blog.author.username}
            date={blog.createdAt}
            id={blog._id}
            title={blog.title}
          />
        ))}
        {
          topBlogs.length === 0 && (
            <EmptyTopBlog>
              No blogs yet.
            </EmptyTopBlog>
          )
        }
      </TopBlogCon>
      <Footer />
    </StyledSide>
  );
};

export default Side;
