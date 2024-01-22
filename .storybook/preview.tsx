/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { GlobalStyles } from '../src/components/globalStyles';
import { lightTheme, darkTheme } from '../src/components/Themes';
import styled, { css, ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ left, fill, theme }) =>
    css`
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: ${left || fill ? 0 : '50vw'};
        border-right: ${left ? '2px dashed #E50000' : 'none'};
        right: ${left ? '50vw' : 0};
        width: ${fill ? '100vw' : '50vw'};
        height: 100vh;
        bottom: 0;
        overflow: auto;
        padding: 1rem;
        background: var(${theme.body});
    }
    `
)

const withTheme:  Decorator = (Story, context) => {
    const  theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === 'light' ? lightTheme : darkTheme

    switch(theme) {
        case 'side-by-side': {
            return (
                <>
                    <ThemeProvider theme={lightTheme}>
                        <GlobalStyles />
                        <ThemeBlock left>
                            <Story />
                        </ThemeBlock>
                    </ThemeProvider>
                    <ThemeProvider theme={darkTheme}>
                        <GlobalStyles />
                        <ThemeBlock>
                            <Story />
                        </ThemeBlock>
                    </ThemeProvider>
                </>
            )
        }
        default: {
            return (
                <ThemeProvider theme={storyTheme}>
                    <GlobalStyles/>
                    <ThemeBlock fill>
                        <Story/>
                    </ThemeBlock>
                 </ThemeProvider> 
            )
        }
    }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'eye', title: 'light' },
        { value: 'dark', icon: 'eyeclose', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
}

export default preview;

export const decorators = [withTheme]
