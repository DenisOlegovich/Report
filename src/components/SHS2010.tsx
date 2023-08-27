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
import Velo from "./Images/Velo.svg";
import Carsh from "./Images/Carsh.svg";
import Scooter from "./Images/Scooter.svg";
import Sharing from "./Images/Sharing.svg";
import CirclesGrey from "./Images/CirclesGrey.png";
import Card from "./Card";
function SHS2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1250] = useMediaQuery("(max-width: 1250px)");
  let statistics1 = [
    {
      title: "7,2 тыс.",
      title2: "прокатных велосипедов в Москве",
      description:
        "Для аренды жителям Москвы и гостям столицы доступны механические и электро велосипеды",
    },
    {
      title: "754 станции",
      title2: "проката велосипедов в Москве",
      description:
        "6 суток в год экономит пассажир в дороге. Время в пути сократилось на 21%, от МКАД до центра быстрее на 14 минут",
    },
  ];
  let statistics2 = [
    {
      title: "30 тыс.",
      title2: "автомобилей в парке каршеринга",
      description: "1 место в мире по крупнейшему парку каршеринга",
    },
    {
      title: "5",
      title2: "поездок на 1 автомобиль каршеринга в сутки",
      description: "Каршеринг помогает разгружать дороги столицы",
    },
  ];
  let statistics3 = [
    {
      title: "60 тыс.",
      title2: "прокатных самокатов в Москве",
      description:
        "Самокаты помогают горожанам добираться до дома от станции метро или остановок наземного транспорта",
    },
    {
      title: "80%",
      title2: "сессий - это поездки с транспортной целью",
      description:
        "Самокаты получили правовой статус и стали популярными транспортными средствами",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesGrey}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" mt="35px">
          с 2010 года
        </Center>
        <Center fontFamily="Manrope" fontSize="20px">
          В МОСКВЕ ПОЯВИЛИСЬ УДОБНЫЕ СРЕДСТВА ПЕРЕДВИЖЕНИЯ:
        </Center>
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          ШЕРИНГОВЫЕ СЕРВИСЫ
        </Center>
        <Box mt="30px">
          <Box maxW="1180px" minH="201px" borderRadius="16px">
            <Flex
              maxW="1180px"
              borderRadius="16px"
              bg="#FFFFFF"
              shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
              flexWrap="wrap"
              m="0 auto"
              borderTopLeftRadius="30px"
              borderTopRightRadius={isSmallerThan1250 ? "30px" : "16px"}
            >
              <Image src={Sharing} w={isSmallerThan1250 ? "100%" : "auto"} />
              <Box
                w={isSmallerThan1250 ? "" : "400px"}
                bg="white"
                p="20px"
                borderRadius="16px"
              >
                <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
                  Сервисы аренды
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  Используют в качестве самостоятельного вида транспорта, а
                  также для построения мультимодальных маршрутов, что позволяет
                  повысить доступность отдельных районов города и снизить
                  нагрузку на дороги
                </Box>
              </Box>
            </Flex>
          </Box>
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex gap="10px" alignItems="center" mt="40px">
              <Image src={Velo} />
              <Box color="#828282">ВЕЛОПРОКАТ (С 2013 Г.)</Box>
            </Flex>
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
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex gap="10px" alignItems="center" mt="40px">
              <Image src={Carsh} />
              <Box color="#828282">КАРШЕРИНГ (С 2015 Г.)</Box>
            </Flex>
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
            {statistics2.map((box, index) => (
              <Card
                key={index}
                title={box.title}
                title2={box.title2}
                description={box.description}
              />
            ))}
          </Flex>

          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex gap="10px" alignItems="center" mt="40px">
              <Image src={Scooter} />
              <Box color="#828282">КИКШЕРИНГ (С 2018 Г.)</Box>
            </Flex>
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
            {statistics3.map((box, index) => (
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
export default SHS2010;
