import styled from "styled-components";

interface GridProps {
    gap?: string;
    cols?: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({ cols }) => `repeat(${cols || 0}, 1fr)`   };
    gap: ${({ gap }) => gap || 0 };
`