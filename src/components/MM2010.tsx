import React from "react";
import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Button,
  Image,
  Spacer,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ReportAuthorization from "./ReportAuthorization";
import NavbarStatistics from "./NavbarStatistics";
import Mark from "./Images/Mark";
import ApLine from "./Images/ApLine";
import BclLine from "./Images/BclLine";
import Number3 from "./Images/Number3";
import Cards from "./Images/Cards";
function MM2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container>
      <Center>с 2010 года</Center>
      <Center>МОСКОВСКИЙ МЕТРОПОЛИТЕН</Center>
      <Box>
        <Center>СТАЛ БЫСТРЕЕ</Center>
        <Box maxW='1180px' maxH='175px' borderRadius='16px' bg='#D34040'>
          <Flex>
            <Box
              w='157px'
              h='105зч'
              color='#FFFFFF'
              p='15px'
              fontFamily='Unbounded'
              fontWeight='600'
              fontSize='24px'>
              Новые станции метро - это
            </Box>
            <Box>
              <Flex>
                <UnorderedList>
                  <ListItem>Новые удобные маршруты</ListItem>
                  <ListItem>Меньше времени в пути</ListItem>
                </UnorderedList>
              </Flex>
              <Flex>
                <Box></Box>
                <Box></Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
export default MM2010;
