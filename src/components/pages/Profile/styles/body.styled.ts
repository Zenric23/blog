import styled from "styled-components";


export const StyledBody = styled.div`
    padding: 80px 0;
    flex: 2;
`

export const Nav = styled.div`
    margin-bottom: 40px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;

    span {
        font-size: 14px;
        opacity: 0.9;
    }
`

export const PostCon = styled.div`
    & > * {
        padding-bottom: 40px;
        border-bottom: 1px solid gray;
    }
`