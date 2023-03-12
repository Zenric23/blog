import React, { useContext } from 'react'
import { LoginModalContext } from '../../../context/loginModalContext'
import { useLoginModal } from '../../../hooks/useLoginModal'
import { Container } from '../../ui/util/container.styled'
import { Flex } from '../../ui/util/flex.styled'
import Login_register from './Login_register'
import { Nav, StyledNavbar, Logo, NavLink, GetStartedBtn } from './styles/navbar.styled'

interface Prop {
  isRead: boolean
}

const HomeNavbar = ({isRead}: Prop) => {

  const { showModal } = useContext(LoginModalContext) as LoginModalContextType

  return (
    
    <StyledNavbar isRead={isRead}>
      <Container>
        <Nav>
          <Logo to="/">ZENBLOG</Logo>
          <Flex gap='20px'>
            <NavLink>
              <li onClick={()=>showModal('login')}>Write</li>
              <li onClick={()=>showModal('login')}>Sign in</li>
            </NavLink>
            <GetStartedBtn onClick={()=>showModal('register')}>
              Get Started
            </GetStartedBtn>
          </Flex>
        </Nav>
      </Container>
      {/* <Login_register /> */}
    </StyledNavbar>
  )
}

export default HomeNavbar