import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { publicRequest } from '../../../util/axiosRequest'
import { Flex } from '../../ui/util/flex.styled'
import { Grid } from '../../ui/util/grid.styled'
import { Avatar, Likes, LikesNum, Name, Title } from './styles/top_writers.styled'


const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Top_writers = () => {
  const [authors, setAuthors] = useState<any[]>([])
  console.log(authors)
  const getTopWriters = async (): Promise<void> => {
    try {
      const res = await publicRequest.get('/post/top-writers')
      setAuthors(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getTopWriters()
  }, [])

  return (
    <>
      <Title>TOP WRITERS</Title>
        <Grid cols={4} gap="20px">
          {
            authors?.map(author=> (
              <StyledLink key={author._id} to={`/profile/${author._id}`}>
                <Flex gap="12px">
                  <Avatar src={author.img} />
                  <div>
                    <Name>{author.name}</Name>
                    <Likes>Likes: <LikesNum>{author.likes}</LikesNum></Likes>
                  </div>
                </Flex> 
              </StyledLink>
            ))
          }
        </Grid>
    </>
  )
}

export default Top_writers