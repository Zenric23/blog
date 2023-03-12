import React from 'react'
import { StyledTopic, TitleHeader, TopicCon, TopicContainer} from './styles/topic.styled'

const TOPICS = ['All', 'Sports', 'Programming', 'Nature', 'Entertainment', "Health"]

const Topic = () => {

  return (
    <StyledTopic>
      <TitleHeader>PICK TOPIC</TitleHeader>
      <TopicContainer>
        {
          TOPICS.map((topic, i)=> (
            <TopicCon to={`/?topic=${topic.toLowerCase()}`} key={i}>{topic}</TopicCon>  
          ))
        }  
      </TopicContainer>
    </StyledTopic>
  )
}

export default Topic