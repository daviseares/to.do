import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/pages';
import store from './src/store';
import appearence from './src/utils/theme';

export default function App() {
  const color = useColorScheme();
  const  theme  = (color && appearence[color]) || appearence.dark;

  return (
    <Provider rootStore={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
