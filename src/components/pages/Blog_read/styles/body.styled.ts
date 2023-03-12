import styled from "styled-components";


export const StyledBody = styled.div`
    padding: 80px 0;
    flex: 2;

    h1 {
        margin: 8px 0 20px 0;
        display: block;
    }
`

export const Author = styled.div`
    font-size: 16px;
    margin-bottom: 4px;
`   

export const Publish = styled.span`
    opacity: 0.5;
    font-size: 14px;
`

export const Actions = styled.div`  
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 20px;
`

export const Edit = styled.span`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    background: white;
    border: 1px solid gray;
    padding: 8px;
    cursor: pointer;
    color: blue;
`

export const Delete = styled.span`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    background: white;
    border: 1px solid gray;
    padding: 8px;
    cursor: pointer;
    color: red;
`
export const ImageCon = styled.div`
    width: 100%;
    height: 410px;
    margin: 60px 0 40px 0;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Desc = styled.p`
    color: black;
`

export const EndingCon = styled.div`
    padding: 50px 0 40px 0;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    gap: 80px;
    margin-bottom: 40px;
`

export const ButtonLike = styled.button`
    padding: 8px 20px;
    border-radius: 10px;
    font-size: 16px;
    color: blue;
    font-weight: 600;
    background: white;
    border: none;
    border: 1px solid blue;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
`
