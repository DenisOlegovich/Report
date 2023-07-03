import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import defaultTheme from "@chakra-ui/theme";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
import Statistics from "./components/Statistics";

export const theme = extendBaseTheme({
  // fonts: {
  //   heading: `'Manrope', sans-serif`,
  //   body: `'Unbounded', sans-serif`,
  //   size: "14px",
  // },
  components: {
    Modal: defaultTheme.components.Modal,
    Select: defaultTheme.components.Select,
    Menu: defaultTheme.components.Menu,
  },
});

function App() {
  return (
    <>
      <RecoilRoot>
        <ChakraBaseProvider theme={theme}>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/events" element={""} />
            <Route path="/events/:id" element={""} />
            <Route path="*" element={""} />
          </Routes>
          <Statistics />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
