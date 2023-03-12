import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useElementOnScreen from "../../../hooks/useElementOnScreen";
import { publicRequest } from "../../../util/axiosRequest";
import Post from "../../ui/Post";
import { LoadMoreBtn } from "../../ui/styles/button.styled";
import { Loader } from "../../ui/styles/loader.styled";
import { Flex } from "../../ui/util/flex.styled";
import { Blog, Nav, StyledBody } from "./styles/body.styled";

const Empty = styled.div`
  opacity: 0.5;
  margin-top: 80px;
  text-align: center;
`;

const Body = () => {
  const [post, setPost] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);


  // const [containerRef, pageNum, setPageNum] = useElementOnScreen({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // }); 

  const getPost = async () => {
    setIsFetching(true);
    try {
      const res = await publicRequest.get(`/post?${searchParams.toString()}`);
      // if(res.data) {
      //   setPost(prev=> {
      //     if(pageNum > 1 ) {
      //       return [...prev, ...res.data.posts]
      //     } 
      //     return res.data.posts
      //   });
      //   setTotal(res.data.total)
      // }
      setPost(res.data.posts)
      setIsFetching(false)
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false)
  };
  

  useEffect(() => {
    getPost();
  }, [location.search]);


  const handleNavigate = (type: string): void => {
    searchParams.set("sort", type);
    navigate(`/?${searchParams.toString()}`);
  };
  

  return (
    <StyledBody>
      <Nav>
        <Flex gap="12px">
          <span onClick={() => handleNavigate("latest")}>Latest</span>
          <span onClick={() => handleNavigate("popular")}>Popular</span>
        </Flex>
      </Nav>
      <div>
        {post.length > 0 &&
          post.map((item, i) => (
            <Blog
              key={item._id}
            >
              <Post
                id={item._id}
                author={item.author?.username}
                date={item.createdAt}
                desc={item.desc}
                title={item.title}
                topic={item.topic}
              />
            </Blog>
          ))}
      </div>
      {
        post?.length === 0 && !isFetching && (
          <Empty>No post yet.</Empty>
        )
      }
      {
        isFetching && (
          <Loader />
        )
      }
      {/* {
        post.length < total && (
          <div style={{border: '1px solid black'}} ref={containerRef}></div>
        )
      }  */}
    </StyledBody> 
  );
};

export default Body;
