import styled from "styled-components";


export const LoadMoreBtn = styled.button`
    border-radius: 20px;
    padding: 16px;
    border: none;
    background-color: white;
    font-weight: 700;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    font-size: 16px;
    margin: 80px auto 0 auto;
    display: block;
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(0);

    &:hover {
        transform: translateY(10px);
    }
`