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
import ClockYellow from "./Images/ClockYellow.svg";
import HeartYellow from "./Images/HeartYellow.svg";
import ShieldYellow from "./Images/ShieldYellow.svg";
import Train from "./Images/Train.svg";
import CirclesOrange from "./Images/CirclesOrange.png";
import Station2 from "./Images/Station2.svg";
import Card from "./Card";
function PGD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "ХХ станций",
      title2: "открылось в вашем районе",
      description:
        "Время в пути для жителей столицы сократилось до 52%, области - до 38%",
    },
    {
      title: "5-7 минут",
      title2: "интервал движения поездов в час пик",
      description:
        "МЦД-1 и МЦД-2 создали множество новых вариантов маршрутов в Москве и области",
    },
    {
      title: "на 70%",
      title2: "чаще стали ходить поезда на направлениях с открытием МЦД",
      description:
        "На направлении стало больше поездов, сократились интервал движения",
    },
  ];
  let statistics2 = [
    {
      title: "до 12%",
      title2: "составляет разгрузка линий метро",
      description: "Благодаря МЦД поездки на метро тоже становятся комфортнее",
    },
    {
      title: "100%",
      title2: "вагонов МЦД - это обновленные подвижные составы",
      description:
        "1 место в России по темпам обновления ЖД поездов среди мегаполисов",
    },
    {
      title: "до 75%",
      title2:
        "дешевле стал проезд на направлениях для жителей Московской области",
      description:
        "С МЦД поездки стали дешевле, а пересадки на метро и МЦК - бесплатными",
    },
  ];
  let statistics3 = [
    {
      title: "100%",
      title2: "бактерий и вирусов уничтожает система очистки воздуха",
      description:
        'В поездах "Иволга" постоянно работает современная система очистки воздуха.',
    },
    {
      title: "до 11",
      title2: "камер установлено в каждом вагоне",
      description:
        "Видеонаблюдение помогает нам обеспечивать безопасность пассажиров в транспорте",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesOrange}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          с 2010 года
        </Center>
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          ПРИГОРОДНОЕ ЖД
        </Center>
        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={ClockYellow} />
              <Box color="#F6A500">БЫСТРЕЕ</Box>
            </Flex>
          </Center>
          <Flex
            maxW="1180px"
            maxH="194px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
          >
            <Image src={Station2} />
            <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                Курьяново
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                новая станция МЦД в вашем районе
              </Box>
              <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C">
                Московские центральные диаметры - новый вид транспорта, который
                объединяет форматпригородных электричек и метрополитена
              </Box>
            </Box>
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

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={HeartYellow} />
              <Box color="#F6A500">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            maxH="175px"
            borderRadius="16px"
            bg="#F6A500"
            p="15px"
            bgImage={Train}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
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
                  Новый подвижной состав
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
                  <UnorderedList w="343.5px">
                    <ListItem>плавный ход</ListItem>
                    <ListItem>крепления для велосипедов</ListItem>
                    <ListItem>USB-зарядки для устройств</ListItem>
                  </UnorderedList>
                  <UnorderedList w="343.5px">
                    <ListItem>широкие дверные проемы</ListItem>
                    <ListItem>сквозной проход</ListItem>
                  </UnorderedList>
                </Flex>
              </Box>
            </Flex>
          </Box>
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

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={ShieldYellow} />
              <Box color="#F6A500">БЕЗОПАСНЕЕ</Box>
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
        </Box>
      </Box>
    </Container>
  );
}
export default PGD2010;
