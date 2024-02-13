import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Kanit:wght@500&display=swap');

    :root {
        --purple: #6C63FF;
        --purpleHover: #534CC2;
        --white: #F7F7F7;
        --black: #252525;
        --actionNonActive: #CDCDCD;
        --delete: #E50000;
        --crossedTextLight: #8E8E8E;
        --crossedTextBlack: #929292;

        --checkbox: url(../images/checkbox.png);
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        background-color: var(${({theme}) => theme.body});
        transition: background-color .5s ease;
    }
`