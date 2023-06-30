import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import defaultTheme from '@chakra-ui/theme';
import { RecoilRoot } from 'recoil';


export const theme = extendBaseTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
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
        <Navbar/>
      Hello world
        <Routes>
          <Route path="/calendar" element={""} />
          <Route path="/events" element={""} />
          <Route path="/events/:id" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </ChakraBaseProvider>
    </RecoilRoot>
    </>
  );
}

export default App;
