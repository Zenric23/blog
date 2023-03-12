import styled from "styled-components";


export const StyledPost = styled.div`
    margin-bottom: 20px;
    animation: show 0.5s;

    @keyframes show {
        from {
            opacity: 0;
        }
    }
`

export const Author = styled.div`
    font-size:14px;
    margin-bottom: 4px;
`

export const Desc = styled.p`
    font-size: 16px;
    margin: 4px 0;
`

export const Publish = styled.span`
    opacity: 0.5;
    font-size: 14px;
`

export const Badge = styled.span`
    opacity: 0.5;
    padding: 4px 8px;
    border-radius: 10px;
    background: #e5e7eb;
    font-size: 14px;
    letter-spacing: 2px;
`