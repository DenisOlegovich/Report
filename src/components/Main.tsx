import React from "react";
import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Statistics from "./Statistics";
import MainPic from "./Images/MainPic.svg";

function Main() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container bg="#F9F9F9">
      <Image
        src={MainPic}
        m="0 auto"
        borderRadius="16px"
        bg="#F9F9F9"
        w="100%"
      />
      <Statistics />
    </Container>
  );
}
export default Main;
