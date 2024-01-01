import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './src/createEmotionCache';
import theme from './src/theme';

import './src/assets/styles/fonts.css';

import type { GatsbyBrowser } from 'gatsby';

const cache = createEmotionCache();

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return (
    // TODO: Fix Error with Cache provider
    // <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
    // </CacheProvider>
  );
};
