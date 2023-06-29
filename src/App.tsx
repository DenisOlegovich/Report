import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import Header from './components/Header';

import defaultTheme from '@chakra-ui/theme';
import { RecoilRoot } from 'recoil';


export const theme = extendBaseTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
    size: '14px',
  },
  components: {
    Modal: defaultTheme.components.Modal,
    Select: defaultTheme.components.Select,
  },
});
function App() {
  return (
    <>
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Header />
      Hello world
      </ChakraBaseProvider>
    </RecoilRoot>
    </>
  );
}

export default App;
