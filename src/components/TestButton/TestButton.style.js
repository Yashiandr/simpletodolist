import styled from "styled-components";

const Button = styled.button`
    background: var(${({theme}) => theme.body});
    border: .0625rem solid var(${({theme}) => theme.inputColor});
    color: var(${({theme}) => theme.inputColor});
    border-radius: .3125rem;
    padding: .5rem 1rem;
    cursor: pointer;
}`;

export default Button