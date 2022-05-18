import React from 'react';

// import { Lessons } from './src/screens/Lessons';
import { UpdateLesson } from './src/screens/UpdateLesson';

import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu'


export default function App() {
  SplashScreen.preventAutoHideAsync();
  
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      {/* <Lessons /> */}
      <UpdateLesson />
    </ThemeProvider>
  );
}
