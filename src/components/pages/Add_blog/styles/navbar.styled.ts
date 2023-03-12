import styled from "styled-components";


export const StyledNavbar = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h2`
    font-weight: bold;
    font-size: 20px;
` 

export const Actions = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

export const PublishBtn = styled.button`
    padding: 8px 20px;
    border-radius: 20px;
    color: white;
    background-color: green;
    font-size: 14px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
`

export const Avatar = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    object-fit: cover;
    border: 1px solid gray;
`