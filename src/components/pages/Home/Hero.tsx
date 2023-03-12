import React, { useContext } from 'react'
import { Container } from '../../ui/util/container.styled'
import { Flex } from '../../ui/util/flex.styled'
import { Desc, FeatureImg, StartReadingBtn, StyledHero, ThisFlex, Title } from './styles/hero.styled'
import heroIMG from '../../../assets/images/hero.png'
import { LoginModalContext } from '../../../context/loginModalContext'

const Hero = () => {
  const { showModal } = useContext(LoginModalContext) as LoginModalContextType
  
  return (
    <StyledHero>
      <Container>
        <ThisFlex>
          <div>
            <Title>Learn from other articles from different writers</Title>
            <Desc>Discover stories, thinking, and expertise from writers on any topic</Desc>
            <StartReadingBtn onClick={()=>showModal('login')}>Start Reading</StartReadingBtn>
          </div>
          <FeatureImg src={heroIMG} />
        </ThisFlex>
      </Container>
    </StyledHero>
  )
}
            
export default Hero