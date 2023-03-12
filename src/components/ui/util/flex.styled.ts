import styled from "styled-components";


interface FlexProps {
    gap?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap || 0 };
`

export const BodyFlex = styled.div`
    display: flex;
    gap: 154px;
`
