import styled from "styled-components";



export const StyledHero = styled.div`
    padding: 65px 0;
    background-color: ${({ theme }) => theme.colors.hero};
`

export const ThisFlex = styled.div`
    display: flex;
    gap: 54px;
    align-items: center;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
`

export const Desc = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
`

export const StartReadingBtn = styled.button`
    font-size: 18px;
    background-color: #E4397D;
    border-radius: 50px;
    border: none;
    color: white;
    padding: 15px 60px;
    cursor: pointer;
    font-weight: bold;
`

export const FeatureImg = styled.img`
    width: 560px;
    height: 288px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`