import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Publish, Author, Title,  } from './styles/featurePost.styled'

interface Post {
  author: string,
  title: string,
  date: string,
  id: string
}


const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 16px;
  display: block;
`

const FeaturePost = ({author, title, date, id}: Post) => { 
  return (
      <StyledLink to={`/blog/${id}`}>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Publish>{new Date(date).toDateString()}</Publish>
      </StyledLink>
  )
}

export default FeaturePost