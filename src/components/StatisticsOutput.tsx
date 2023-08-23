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
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Link,
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
import MM2010 from "./MM2010";
import NT2010 from "./NT2010";
import PGD2010 from "./PGD2010";
import DD2010 from "./DD2010";
import SHS2010 from "./SHS2010";
function StatisticsOutput() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container>
      <NavbarStatistics />
      <Flex
        pt="30px"
        pb="30px"
        justifyContent={isSmallerThan1200 ? "center" : "space-between"}
        flexWrap="wrap"
      >
        <Box
          w={isSmallerThan1200 ? "90%" : "500px"}
          h="480px"
          borderRadius="16px"
          p="15px"
          bg="white"
          backgroundImage="url('https://i.ibb.co/d4YmV0X/image-150.jpg')"
          backgroundPosition="right bottom"
          backgroundRepeat="no-repeat"
        >
          <Flex w="293px" h="38px" alignItems="center">
            <Box pl="15px" fontFamily="Manrope" fontSize="20px">
              Построить маршрут
            </Box>
          </Flex>
          <Input placeholder="Откуда"></Input>
          <Input placeholder="Куда"></Input>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button>Построить маршрут</Button>
          <Link href="/mostrans/build_route">Карта</Link>
        </Box>
        <Box
          w="380px"
          h="229px"
          bg="#a2a9b1"
          borderRadius="16px"
          boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
        >
          <Box w="50%" h="120px" p="20px" borderRadius="16px" color="white">
            <Box fontFamily="Unbounded" fontWeight="600" fontSize="20px">
              Оплата проезда
            </Box>
            <Box fontFamily="Manrope" fontSize="16px">
              Все, что нужно знать о ценах и способах оплаты
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
export default StatisticsOutput;
