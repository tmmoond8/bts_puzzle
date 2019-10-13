import { addDecorator, configure } from '@storybook/react';
import * as React from 'react'
import theme from '../styles/theme';
import GlobalStyle from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';

const req = require.context('../components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      {cb()}
    </ThemeProvider>
  </>
);

addDecorator(withGlobal);
configure(loadStories, module);