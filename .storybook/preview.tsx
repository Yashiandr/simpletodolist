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

const withTheme:  Decorator = (Story, context) => {
    const  theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === 'light' ? lightTheme : darkTheme

    return (
      <>
        <ThemeProvider theme={storyTheme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </>
    )
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
      ],
    },
  },
}

export default preview;

export const decorators = [withTheme]
