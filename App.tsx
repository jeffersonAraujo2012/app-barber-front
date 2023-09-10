import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import themes from './src/themes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <ThemeProvider theme={themes.light}>
      <View>
        <Text>Tela inicial</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
