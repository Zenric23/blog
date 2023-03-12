import styled from "styled-components";
import { Link } from "react-router-dom";


interface StyledNavbarType {
    isRead: boolean
}

export const StyledNavbar = styled.div<StyledNavbarType>`
    height: 80px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme, isRead }) =>  isRead ? 'none' : theme.colors.hero};
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`

export const Logo = styled(Link)`
    font-size: 20px;
    color: black;
    text-decoration: none;
    font-weight: bold;
`

export const NavLink = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;

    li {
        font-weight: 500;
        cursor: pointer;
    }

`

export const GetStartedBtn = styled.button`
    padding: 10px 40px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    background: white;
    cursor: pointer;
    border: none;
    border: 1px solid black;
`