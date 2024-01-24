import  styled, { css } from "styled-components";

const ToDoes = styled.label<{ check?: boolean}>(
    ({check, theme}) =>
    css`
        display: inline-flex;
        align-items: center;
        font-family: 'Kanit', sans-serif;
        color: var(${({theme}) => check === "true" ? theme.crossedText : theme.mainText });
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration-line: ${check === 'true' ? 'line-through' : 'none'};
    }
    `
)

export default ToDoes;