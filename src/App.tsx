import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import defaultTheme from "@chakra-ui/theme";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import MM2010 from "./components/MM2010";
import NT2010 from "./components/NT2010";
import PGD2010 from "./components/PGD2010";
import DD2010 from "./components/DD2010";
import SHS2010 from "./components/SHS2010";
import TAXI2010 from "./components/TAXI2010";
import AV2010 from "./components/AV2010";

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
            <Route path="/main" element={<Main />} />
            <Route path="/metro" element={<MM2010 />} />
            <Route path="/groundtransport" element={<NT2010 />} />
            <Route path="/suburbanrailway" element={<PGD2010 />} />
            <Route path="/roads" element={<DD2010 />} />
            <Route path="/sharing" element={<SHS2010 />} />
            <Route path="/taxi" element={<TAXI2010 />} />
            <Route path="/station" element={<AV2010 />} />
            <Route path="*" element={<Main />} />
          </Routes>
          <Footer />
        </ChakraBaseProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
