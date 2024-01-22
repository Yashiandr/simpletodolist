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
        --crossedTextLight: rgba(37, 37, 37, .5);
        --crossedTextBlack: rgba(255, 255, 255, .5);
    }

    body {
        height: 100vh;
        background-color: var(${({theme}) => theme.body});
        transition: background-color .5s ease;
    }
`