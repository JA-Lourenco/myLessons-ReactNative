import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Lessons } from './src/screens/Lessons';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Lessons />
    </ThemeProvider>
  );
}
