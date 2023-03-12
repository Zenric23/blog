import styled from "styled-components";
import { Link } from "react-router-dom";


export const TitleHeader = styled.h5`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const TopicContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const TopicCon = styled(Link)`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.line};
    font-size: 14px;
    opacity: 0.5;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

export const StyledTopic = styled.div`
    padding : 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    position: sticky;
`