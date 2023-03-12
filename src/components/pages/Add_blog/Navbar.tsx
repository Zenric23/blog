import React, { useContext } from 'react'
import { ActionContainer } from '../../ui/util/container.styled'
import { Flex } from '../../ui/util/flex.styled'
import { MdArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Actions, Avatar, Logo, Nav, PublishBtn, StyledNavbar } from './styles/navbar.styled'
import styled from 'styled-components'
import { UserContext } from '../../../context/userContext'


const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`

const Navbar = () => {
  const { state } = useContext(UserContext)

  return (
    <StyledNavbar>
      <ActionContainer>
        <Nav>
          <LogoLink to="/">ZENBLOG</LogoLink>
          <Actions>
            <PublishBtn type='submit' form='add-blog-form'>PUBLISH</PublishBtn>
            <Flex gap='4px'>
              <Avatar src={state.user?.img} />
              <MdArrowDropDown size={16} />
            </Flex>
          </Actions>
        </Nav>
      </ActionContainer>
    </StyledNavbar>
  )
}

export default Navbar