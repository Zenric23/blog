import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Flex } from './ui/util/flex.styled'
import { FiEdit } from 'react-icons/fi'
import { MdArrowDropDown } from 'react-icons/md'
import { Container } from './ui/util/container.styled'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'


const StyledNavbar = styled.div`
  height: 80px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h2`
  font-size: 20px;
  font-weight: bold;
`

const Write = styled.span`
  font-size: 18px;
`

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const WriteLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Menu = styled.ul`
  font-size: 14px;
  position: absolute;
  list-style: none;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  background-color: white;
  border-radius: 4px;

  & > * {
    white-space: no-wrap;
    display: block;
    padding: 6px 14px;
    color: black;
    text-decoration: none;
    &:hover {
      background: #f1f5f9;
    }
  }
`

const MyBlogLink = styled(Link)`
  white-space : nowrap; 

`


const Navbar = () => {
  const { state } = useContext(UserContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.replace('/')
  }
  
  return (
    <StyledNavbar>
      <Container>
        <Nav>
          <StyledLink to="/">
            <Logo>ZENBLOG</Logo>
          </StyledLink>
          <Flex gap="24px">
            <Flex gap='10px' style={{cursor: 'pointer'}}>
              <WriteLink to="/add-blog">Write</WriteLink>
              <FiEdit size={20} />
            </Flex>
            <Flex gap="4px">
              <Avatar src={state.user?.img} />
              <span 
                style={{cursor: 'pointer'}} 
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
              >
                <span style={{position: 'relative'}}>
                  <MdArrowDropDown size={16} />
                  {
                  isMenuOpen && (
                    <Menu>
                      <MyBlogLink to={`/profile/${state.user?._id}`}>My Blog</MyBlogLink>
                      <li onClick={handleLogout}>
                        Logout
                      </li>
                    </Menu>
                  )
                }
                </span>
              </span>
              
            </Flex>
          </Flex>
        </Nav>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar