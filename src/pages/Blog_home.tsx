import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/pages/Blog_home/Body'
import Side from '../components/pages/Blog_home/Side'
import { Container } from '../components/ui/util/container.styled'
import { BodyFlex } from '../components/ui/util/flex.styled'

const Blog_home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BodyFlex>
          <Body />
          <Side />
        </BodyFlex>
      </Container>
    </>
  )
}

export default Blog_home