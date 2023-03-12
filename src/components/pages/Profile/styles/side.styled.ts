import styled from "styled-components";


export const StyledSide = styled.div`
    padding: 80px 0 0 40px;
    border-left: 1px solid gray;
    flex: 1;
`

export const Title = styled.h5`
    font-size: 14px;
    font-weight: bold;
`

export const UserAvatar = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 16px;
`

export const Avatar = styled.img`
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 1px solid gray;
`

export const Name = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 700;
    opacity: 0.9;
`

export const Likes = styled.span`
    font-size: 14px;
    opacity: 0.5;
    font-weight: 700;
`

export const TopBlogCon = styled.div`
    border-bottom: 1px solid gray;
    padding-top: 24px;

    & > * {
        margin-bottom: 16PX;
    }
`





