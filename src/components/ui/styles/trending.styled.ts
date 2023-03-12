import styled from "styled-components";


export const StyledTrending = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    padding-bottom: 20px;
`

export const HeaderTitle = styled.h5`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 14px;
` 

export const Name = styled.span`
    font-size: 14px;
`

export const Title = styled.h5`
    font-size: 16px;
    font-weight: bold;
    margin: 4px 0 ;
`

export const Date = styled.span`
    font-size: 14px;
    opacity: 0.5;
`

export const BlogContainer = styled.div`
    & > * {
        margin-top: 16px;
    }
`