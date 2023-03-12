import styled from "styled-components";

interface StyleModalProps {
    isOpen: boolean;
}

interface FormConProps {
    formType: string

}

export const StyledModal = styled.div<StyleModalProps>`
    position: fixed;
    inset: 0;
    opacity: ${({ isOpen }) => isOpen  ? 1 : 0} ;
    visibility: ${({ isOpen }) => isOpen  ? 'visible' : 'hidden'};
    transition: all 0.3s ease-in-out;
    height: 100vh;
    z-index: 100;
`

export const BackDrop = styled.div`
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    inset: 0;
    transition: 0.3s;
`

export const Wrapper = styled.div`
    position: absolute;
    width: 600px;
    overflow: hidden;
    border-radius: 10px;
    transform: translate(-50%, -60%);
    top: 50%;
    left: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`

export const FormCon = styled.div<FormConProps>`
    display: inline-flex;
    gap: 24px;
    transform: translateX(${({ formType }) => formType === 'login' ? 0 : -624}px);
    transition: all 0.5s ease-in-out;
    background-color: white;
`

export const FormC = styled.form`
    width: 600px;
    text-align: center;
    padding: 80px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);

    & > * {
        margin-bottom: 24px;
    }

    h3 {
        margin-bottom: 54px;
    }

    input {
        padding: 14px;
        outline: none;
        border: 1px solid gray;
        border-radius: 4px;
        display: block;
        width: 100%;
        font-size: 16px;
    }

    button {
        display: block;
        background-color: black;
        color: white;
        border-radius: 4px;
        padding: 14px;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
        font-size: 14px;
    }
`

export const Foot = styled.span`
    font-size: 14px;
`

export const Link = styled.span`
    font-weight: bold;
    cursor: pointer;
`


interface BadgeProp {
    type: string
}

export const Badge = styled.div<BadgeProp>`
    font-size: 14px;
    border-radius: 4px;
    background: ${ ({ type }) => type==='err' ? 'red' : 'green' } ;
    color: white;
    padding: 16px;
    margin-bottom: 24px;;
`