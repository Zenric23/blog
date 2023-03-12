import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePostList from "../../../hooks/usePostList";
import Footer from "../../ui/Footer";
import Post from "../../ui/Post";
import { Loader } from "../../ui/styles/loader.styled";
import { StickyCon } from "../../ui/styles/sticky.styled";
import Topic from "../../ui/Topic";
import Trending from "../../ui/Trending";
import { Container } from "../../ui/util/container.styled";
import {
  Empty,
  FeatureSection,
  PostContainer,
  StyledBody,
} from "./styles/body.styled";

const Body = () => {
  const location = useLocation()

  const { posts, isLoading } = usePostList(
    `/post?${location.search.split("?")[1]}`
  );


  return (
    <Container>
      <StyledBody>
        <PostContainer>
          {posts &&
            posts.map((post) => (
              <Post
                author={post.author?.username}
                date={post.createdAt}
                desc={post.desc}
                id={post._id}
                title={post.title}
                topic={post.topic}
                key={post._id}
              />
            ))}
          {isLoading && <Loader />}
          {posts?.length === 0 && !isLoading && <Empty>No post yet</Empty>}
        </PostContainer>
        <FeatureSection>
          <StickyCon>
            <Topic />
            <Footer />
          </StickyCon>
        </FeatureSection>
      </StyledBody>
    </Container>
  );
};

export default Body;
