import TestButton from "./TestButton";
import styled, {css, ThemeProvider} from "styled-components";
import React from "react";
import { darkTheme, lightTheme } from "../Themes";


export default { component: TestButton };

export const Default  = {}

export const LightTheme = {
    ...Default,
    parameters: {theme: 'light'}
}

export const DarkTheme = {
    ...Default,
    parameters: {theme: 'dark'}
}

const ThemeBlock = styled.div<{$left?: boolean}>(
    ({$left, theme}) =>
    css`
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: ${$left ? 0 : '50vw'};
        border-right: ${$left ? '2px dashed #E50000' : 'none'};
        right: ${$left ? '50vw' : 0};
        width: '50vw';
        height: 100vh;
        bottom: 0;
        overflow: auto;
        padding: 1rem;
        background: var(${theme.body});
    `
)

export const SideBySide = {
    render: (args: any) => 
        <>
            <ThemeProvider theme={lightTheme}>
                <ThemeBlock $left>
                    <TestButton {...args} />
                </ThemeBlock>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
                <ThemeBlock>
                    <TestButton {...args} />
                </ThemeBlock>
            </ThemeProvider>
        </>
};