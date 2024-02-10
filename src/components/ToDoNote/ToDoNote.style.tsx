import  styled, { css } from "styled-components";

const ToDoes = styled.li<{ $check?: boolean}>(
    ({$check, theme}) =>
    css`
        display: inline-flex;
        align-items: center;
        font-family: 'Kanit', sans-serif;
        color: var(${({theme}) => $check ? theme.crossedText : theme.mainText });
        padding: 20px 0;
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration-line: ${$check ? 'line-through' : 'none'};
        user-select: none;
        gap: 17px;
        background-color: var(${({theme}) => theme.body});
        transition: border 1s ease, background-color .5s ease ;
    `
)

const Checkbox = styled.input<{}>(() =>
    css`
        appearance: none;
        position: relative;
        display: inline-block;
        width: 1.625rem;
        height: 1.625rem;
        box-sizing: border-box;
        border-radius: .125rem;
        border: .0625rem solid var(--purple);
        margin: 0;

        &:checked {
            background-color: var(--purple);

            &::after {
                box-sizing: border-box;
                position: absolute;
                top: 0;
                bottom: .3125rem;
                left: .0625rem;
                right: 0;
                margin: auto;
                content: "";
                width: .4375rem;
                height: .875rem;
                border-top: .125rem solid var(--white);
                border-left: .125rem solid var(--white);
                transform: rotate(-135deg);
            }
        }
    `
)

export {ToDoes, Checkbox};