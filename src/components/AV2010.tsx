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
import ClockRed from "./Images/ClockRed.svg";
import HeartRed from "./Images/HeartRed.svg";
import ShieldRed from "./Images/ShieldRed.svg";
import BusStation from "./Images/BusStation.svg";
import CirclesBlue2 from "./Images/CirclesBlue2.png";
import Card from "./Card";
function AV2010() {
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "6",
      title2: "автовокзалов и автостанций работает в Москве",
      description:
        "Просторные залы ожидания, камеры хранения и кафе. Автовокзалы полностью приспособлены для маломобильных пассажиров.",
    },
    {
      title: "162",
      title2:
        "направления, из которых 132 внутренних и 30 международных направлений",
      description:
        "Популярные среди пассажиров направления: Киржач, Обнинск, Воронеж и Кинешма.",
    },
  ];

  return (
    <Container
      bg="white"
      bgImage={CirclesBlue2}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          АВТОВОКЗАЛЫ
        </Center>
        <Box mt="30px">
          <Flex
            maxW="1180px"
            borderRadius="16px"
            bg="#546DC8"
            m="0 auto"
            position="relative"
            h={isSmallerThan500 ? "226px" : ""}
          >
            <Flex p="20px" alignItems="center" flexWrap="wrap" mr="338px">
              <Box
                w="250px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                lineHeight="120%"
                p="13px 42px 13px 0px"
              >
                Постоянно обновляемся
              </Box>
              <Box>
                <Flex
                  w={isSmallerThan1200 ? "" : "350px"}
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="white"
                  gap="20px"
                  justifyContent="space-between"
                  alignItems="center"
                  lineHeight="19.2px"
                >
                  Мы реконструировали 5 автовокзалов и автостанций, а в 2023
                  закончим работы на автостанции «Красногвардейская».
                </Flex>
              </Box>
              <Image
                src={BusStation}
                bottom="0px"
                right="0px"
                position="absolute"
                w="236px"
                h="210px"
              />
            </Flex>
          </Flex>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
            flexWrap="wrap"
            gap="20px"
            maxW="1180px"
            ml="auto"
            mr="auto"
          >
            {statistics1.map((box, index) => (
              <Card
                key={index}
                title={box.title}
                title2={box.title2}
                description={box.description}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
export default AV2010;
