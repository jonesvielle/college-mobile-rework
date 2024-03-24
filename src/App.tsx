/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme, {palette} from './shared/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './navigation/RootStackNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RootStackNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
