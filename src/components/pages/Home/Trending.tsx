import React, { useEffect, useState } from 'react'
import { Container } from '../../ui/util/container.styled'
import { StyledTrending, Title  } from '../../pages/Home/styles/trending.styled'
import { Grid } from '../../ui/util/grid.styled'
import FeaturePost from '../../ui/FeaturePost'
import { publicRequest } from '../../../util/axiosRequest'
import { BoxLoader, Loader } from '../../ui/styles/loader.styled'


const Trending = () => {
  const [trending, setTrending] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(()=> {
    const getTrending = async () => {
      setIsLoading(true)
      try {
        const res = await publicRequest.get('/post?limit=8&sort=popular')
        res && setTrending(res.data.posts)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getTrending()
  }, [])


  return (
    <StyledTrending>
      <Container>
        <Title>TRENDING</Title>
        <Grid cols={4} gap="24px 40px">
          {
            trending.map((post) =>  {
              return (
                <FeaturePost  id={post._id} key={post._id} author={post.author?.username} title={post.title} date={post.createdAt} />
              )
            }
            )
          }
          {
            isLoading && [...Array(8)].map((item: any, i: any)=> (
              <BoxLoader />
            ))
          }
        </Grid>
      </Container>
    </StyledTrending>
  )
}

export default Trending