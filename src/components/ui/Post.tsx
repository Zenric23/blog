import React from "react";
import styled from "styled-components";
import { Author, Badge, Publish, Desc, StyledPost } from "./styles/post.styled";
import { Flex } from "./util/flex.styled";
import { Link } from "react-router-dom";
import parse from 'html-react-parser'
import { truncateString } from "../../util/truncateString";
import clip from 'text-clipper'
import _truncate from "lodash/truncate";


interface PostType {
  author: string,
  title: string,
  desc: string,
  date: string,
  topic: string,
  id: string
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Post = ({ author, title, desc, date, topic, id }: PostType) => {
  
  const truncateDesc = parse(_truncate(desc, { length: 300 }))

  return (
    <StyledPost>
      {
        title && (
        <StyledLink to={`/blog/${id}`}>
          <Author>{author}</Author>
          <h3>{title}</h3>
          <Desc>{truncateDesc}</Desc>
          <Flex gap="8px">
            <Publish>{new Date(date).toDateString()}</Publish>
            <span style={{opacity: '0.5'}}>.</span>
            <Badge>{topic}</Badge>
          </Flex>
        </StyledLink>
        )
      }
    </StyledPost>
  );
};

export default Post;
