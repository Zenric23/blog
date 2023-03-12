import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../util/axiosRequest'
import FeaturePost from './FeaturePost'
import { BlogContainer, HeaderTitle, Name, StyledTrending, Title } from './styles/trending.styled'


const Trending = () => {
  const [trending, setTrending] = useState<any[]>([])


  useEffect(()=> {
    const getTrending = async () => {
      try {
        const res = await publicRequest.get('/post?limit=5&sort=popular')
        res && setTrending(res.data.posts)
      } catch (error) {
        console.log(error)
      }
    }
    getTrending()
  }, [])

  return ( 
    <StyledTrending>
      <HeaderTitle>TRENDING</HeaderTitle>
      <BlogContainer>
        {
          trending.map(post=> 
            <FeaturePost id={post._id} author={post.author?.username} date={post.createdAt} title={post.title} key={post._id} />
          )
        }
      </BlogContainer>
    </StyledTrending>
  )
}

export default Trending