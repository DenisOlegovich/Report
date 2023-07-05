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

function Main() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Image src='https://i.ibb.co/Tws8GSn/Main.jpg' width='100%' />
      <Statistics />
    </>
  );
}
export default Main;
