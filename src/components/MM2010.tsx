import React, { useRef, useEffect, useCallback, useLayoutEffect } from "react";
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
  Img,
  Highlight,
  Text,
  useDimensions,
} from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ReportAuthorization from "./ReportAuthorization";
import NavbarStatistics from "./NavbarStatistics";
import Mark from "./Images/Mark";
import ApLine from "./Images/ApLine";
import BclLine from "./Images/BclLine";
import Number3 from "./Images/Number3";
import Cards from "./Images/Cards";

import MMLightBox from "./Images/MMLightBox.svg";
import Turniket from "./Images/Turniket.svg";
import ClockRed from "./Images/ClockRed.svg";
import HeartRed from "./Images/HeartRed.svg";
import ShieldRed from "./Images/ShieldRed.svg";
import CirclesRed from "./Images/CirclesRed.png";
import Station from "./Images/Station.svg";
import Card from "./Card";

function MM2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");

  let statistics1 = [
    {
      title: "107",
      title2: "новых станций метро и МЦК было открыто с 2010 года",
      description: "1 место в Европе по темпам открытия новых станций",
    },
    {
      title: "99, 98%",
      title2: "точность соблюдения графика движения в метро",
      description:
        "1 место в мире по точности соблюдения графика движения поездов",
    },
    {
      title: "на ХХ",
      title2: "больше поездов выходит на Арбатско-Покровскую линию ежедневно",
      description:
        "На линии стало больше поездов, чтобы сократить ваше время ожидания",
    },
  ];
  let statistics2 = [
    {
      title: "70%",
      title2: "вагонов метро - это новые подвижные составы",
      description: "1 место в Европе по темпам обновления поездов",
    },
    {
      title: "20%",
      title2: "современных поездов курсирует на Арбатско-Покровской линии",
      description:
        "На линии используется современный подвижной состав «Москва»",
    },
    {
      title: "на ХХ%",
      title2: "меньше людей в вагонах на Арбатско-Покровской линии",
      description:
        "Мы выпускаем больше поездов в метро, чтобы поездки были еще комфортнее",
    },
  ];
  let statistics3 = [
    {
      title: "99%",
      title2: "вентиляционных шахт было модернизировано",
      description:
        "Благодаря современному оборудованию, воздух в метро обновляется каждые 20 мин",
    },
    {
      title: "ХХ км",
      title2: "рельс заменили в метро с 2010 года",
      description:
        "После модернизации инфраструктуры в вагонах стало значительно тише",
    },
    {
      title: "ХХ",
      title2: "навесов установлено на входах в метро",
      description:
        "Они защищают инфраструктуруи пассажиров и от осадков и обледенения",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesRed}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          с 2010 года
        </Center>
        <Center
          fontFamily="Unbounded"
          fontWeight="700"
          fontSize={isSmallerThan700 ? "26" : "44"}
          textAlign="center"
        >
          МОСКОВСКИЙ МЕТРОПОЛИТЕН
        </Center>
        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={ClockRed} />
              <Box color="#D34040">БЫСТРЕЕ</Box>
            </Flex>
          </Center>
          <Flex
            maxW="1180px"
            minH="175px"
            borderRadius="16px"
            bg="#D34040"
            m="0 auto"
            position="relative"
          >
            <Flex p="20px" alignItems="center" flexWrap="wrap" mr="200px">
              <Box
                w="250px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="13px 42px 13px 0px"
                lineHeight="120%"
              >
                Новые станции метро - это
              </Box>

              <Flex
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                alignItems="center"
                lineHeight="19.2px"
                flex="1"
                flexWrap="wrap"
                columnGap="20px"
                minW="350px"
              >
                <UnorderedList>
                  <ListItem mb="12px">Новые удобные маршруты</ListItem>
                  <ListItem mb="12px">Меньше времени в пути</ListItem>
                </UnorderedList>
                <UnorderedList>
                  <ListItem mb="12px">
                    Повышение стоимости жилья на 12 %
                  </ListItem>
                  <ListItem mb="12px">Больше рабочих мест в районе</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>

            <Image
              src={MMLightBox}
              position="absolute"
              bottom="-53px"
              right="0px"
              w="200px"
              h="350px"
              visibility={isSmallerThan500 ? "hidden" : "visible"}
            />
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

        <Box mt="10px" p="20px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={HeartRed} />
              <Box color="#D34040">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            minH="175px"
            borderRadius="16px"
            bg="#3C3B3B"
            m="0 auto"
            position="relative"
          >
            <Flex
              p="20px"
              alignItems="center"
              flexWrap="wrap"
              mr={isSmallerThan500 ? "" : "200px"}
            >
              <Box
                w={isSmallerThan1000 ? "" : "250px"}
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="13px 42px 13px 0px"
                lineHeight="120%"
              >
                Новые турникеты на всех станциях
              </Box>

              <Flex
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                alignItems="center"
                lineHeight="19.2px"
                flex="1"
                flexWrap="wrap"
                columnGap="20px"
                minW={isSmallerThan1000 ? "" : "350px"}
              >
                <Box
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="white"
                  gap="20px"
                  justifyContent="space-between"
                  alignItems="center"
                  lineHeight="19.2px"
                  mb="20px"
                >
                  Мы заменили турникеты на всех станциях метро и МЦК, при оплате
                  банковской картой они срабатывают более чем в 2 раза, а по
                  биометрии - в 3 раза быстрее.
                </Box>
                <Box>
                  В скором времени появится возможность оплатить проезд и по
                  СБП.
                </Box>
              </Flex>
              <Image
                src={Turniket}
                position="absolute"
                bottom="0px"
                right="-25px"
                visibility={isSmallerThan500 ? "hidden" : "visible"}
              />
            </Flex>
          </Box>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
            flexWrap="wrap"
            gap="20px"
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
        </Box>

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={ShieldRed} />
              <Box color="#D34040">БЕЗОПАСНЕЕ</Box>
            </Flex>
          </Center>
          <Center
            minH="175px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            justifyContent={isSmallerThan1200 ? "center" : "space-between"}
            flexWrap="wrap"
            m="0 auto"
            borderTopLeftRadius="30px"
          >
            <Image src={Station} w={isSmallerThan1200 ? "100%" : "auto"} />
            <Box
              p="20px"
              borderRadius="16px"
              w={isSmallerThan1200 ? "" : "350px"}
            >
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                ХХХХХХ
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                была реконструирована в ХХХХ году
              </Box>
              <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C">
                Всего на Арбатско-Покровской линии было реконструировано ХХ
                станций
              </Box>
            </Box>
          </Center>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
            flexWrap="wrap"
            gap="20px"
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
export default MM2010;
