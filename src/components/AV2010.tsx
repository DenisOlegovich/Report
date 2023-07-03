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
function AV2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container bg="white" mt="30px">
      <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
        АВТОВОКЗАЛЫ
      </Center>
      <Box mt="30px">
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#546DC8"
          p="15px"
        >
          <Flex
          // justifyContent="space-between"
          >
            <Box w="199px" h="131px">
              <Box
                w="157px"
                h="105px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
              >
                Постоянно обновляемся
              </Box>
            </Box>
            <Box>
              <Flex
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                gap="20px"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                lineHeight="19.2px"
              >
                Мы реконструировали 5 автовокзалов и автостанций, а в 2023
                закончим работы на автостанции «Красногвардейская».
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex
          mt="30px"
          justifyContent={isSmallerThan1000 ? "center" : "space-between"}
          flexWrap="wrap"
          gap="20px"
        >
          <Box
            w="380px"
            h="218px"
            bg="#F9F9F9"
            borderRadius="16px"
            boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
          >
            <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                6
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                автовокзалов и автостанций работает в Москве
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Просторные залы ожидания, камеры хранения и кафе. Автовокзалы
              полностью приспособлены для маломобильных пассажиров.
            </Box>
          </Box>
          <Box
            w="380px"
            h="218px"
            bg="#F9F9F9"
            borderRadius="16px"
            boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
          >
            <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                162
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                направления, из которых 132 внутренних и 30 международных
                направлений
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Популярные среди пассажиров направления: Киржач, Обнинск, Воронеж
              и Кинешма.
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
export default AV2010;
