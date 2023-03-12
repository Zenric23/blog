import styled from "styled-components";


interface LoaderTypes {
    isCenter?: boolean
}

export const Loader = styled.div<LoaderTypes>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid rgba(0,0,0,0.2);
    border-top: 5px solid rgba(0,0,0,0.5);
    margin: 60px auto 0 auto;
    animation: spin 1s linear infinite;


    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
` 

export const BoxLoader = styled.div`
    height: 100px;
    border-radius: 8px;
    background-color: #f3f4f6;
    animation: pulse linear infinite;

    @keyframes pulse {
        from{
            opacity: 1;
        }
        to {
            opacity: 0.5
        }
    }
`