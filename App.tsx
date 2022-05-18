import React from 'react';

import { Lessons } from './src/screens/Lessons';

import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';

// import {
//   useFonts,
//   Ubuntu_400Regular,
//   Ubuntu_700Bold
// } from '@expo-google-fonts/ubuntu'


// https://docs.expo.dev/versions/latest/sdk/splash-screen/

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Ubuntu_400Regular,
  //   Ubuntu_700Bold
  // })

  return (
    <ThemeProvider theme={theme}>
      <Lessons />
    </ThemeProvider>
  );
}
