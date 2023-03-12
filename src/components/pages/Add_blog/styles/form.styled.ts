import styled from "styled-components";

export const StyledForm = styled.div`
    margin: 80px 0 200px 0;
`

export const AddCon = styled.div`
    height: 250px;
    border: 1px solid gray;
    border-radius: 10px;
    position: relative;
    border: 2px dashed gray;
    cursor: pointer;
`

export const AddImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;

`

export const IconCon = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const InputCon = styled.div`
    margin-top: 40px;

    label{
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
        display: block;
    }

    textarea {
        width: 100%;
        outline: none;
        padding: 10px;
        border-bottom   : 1px solid gray;
        display: block;
        font-size: 16px;
        line-height: 1.5;
    }

    select {
        width: 100%;
        outline: none;
        padding: 10px;
        border-bottom   : 1px solid gray;
        display: block;
        font-size: 16px;
        line-height: 1.5;
    }
`