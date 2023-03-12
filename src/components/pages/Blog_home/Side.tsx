import React from 'react'
import styled from 'styled-components'
import Footer from '../../ui/Footer'
import { StickyCon } from '../../ui/styles/sticky.styled'
import Topic from '../../ui/Topic'
import Trending from '../../ui/Trending'
// import { Container } from '../../ui/util/container.styled'
import { SideStyled} from './styles/side.styled'


const Side = () => {
  return (
    <SideStyled>
      <StickyCon>
        <Trending />
        <div style={{marginTop: '24px'}}>
          <Topic />
        </div>
        <Footer />
      </StickyCon>
    </SideStyled>
  )
}

export default Side