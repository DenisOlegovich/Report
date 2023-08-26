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
import Taxi from "./Images/Taxi.svg";
import CirclesYellow from "./Images/CirclesYellow.png";
import Card from "./Card";

function TAXI2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "4 мин",
      title2: "среднее время подачи такси в час пик",
      description:
        "Такси приезжает очень быстро, вам не придется долго ждать. Время подачи такси сократилось с 2010 года в 8 раз.",
    },
    {
      title: "300 тыс.",
      title2:
        "водителей Москвы и МО зарегистрированы в системе аналитики работы такси",
      description:
        "Благодаря обязательной регистрации в единой системе управления снижается количество ДТПв",
    },
    {
      title: "более 1,7 млн",
      title2: "пассажиров в сутки перевозит такси в Москве",
      description:
        "Пассажиропоток увеличился в 35 раз по сравнению с 2010 годом.",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesYellow}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          В 2011 ГОДУ МЫ ВНЕДРИЛИ ЕДИНЫЙ СТАНДАРТ
        </Center>
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          ТАКСИ
        </Center>

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
        <Box mt="30px">
          <Box
            maxW="1180px"
            maxH="211px"
            borderRadius="16px"
            bg="#D34040"
            m="0 auto"
          >
            <Flex
              borderRadius="16px"
              bg="#FFFFFF"
              shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            >
              <Image src={Taxi} />
              <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
                <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
                  Польза во время пандемии
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  Во время пандемии COVID-19 до 600 автомобилей такси каждый
                  день доставляли врачей к заболевшим жителям столицы
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default TAXI2010;
