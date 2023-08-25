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
  Img,
  Highlight,
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
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
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
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
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
            h="175px"
            borderRadius="16px"
            bg="#D34040"
            m="0 auto"
            position="relative"
          >
            <Flex p="20px" w="80%">
              <Box
                w="199px"
                h="131px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="13px 42px 13px 0px"
                lineHeight="120%"
              >
                Новые станции метро - это
              </Box>

              <Center
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                gap="20px"
                alignItems="center"
                h="100%"
                lineHeight="19.2px"
                flex="1"
                rowGap="12px"
              >
                <UnorderedList>
                  <ListItem mb="12px">Новые удобные маршруты</ListItem>
                  <ListItem>Меньше времени в пути</ListItem>
                </UnorderedList>
                <UnorderedList>
                  <ListItem mb="12px">
                    Повышение стоимости жилья на 12 %
                  </ListItem>
                  <ListItem>Больше рабочих мест в районе</ListItem>
                </UnorderedList>
              </Center>
            </Flex>

            <Image
              src={MMLightBox}
              position="absolute"
              bottom="-53px"
              right="50px"
              w="200px"
              h="350px"
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
            {/* {statistics1.map((box, index) => (
              <Card
                key={index}
                title={box.title}
                title2={box.title2}
                description={box.description}
              />
            ))} */}
          </Flex>
        </Box>

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={HeartRed} />
              <Box color="#D34040">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            maxH="175px"
            borderRadius="16px"
            bg="#3C3B3B"
            p="15px"
          >
            <Flex
              // justifyContent="space-between"
              alignItems="center"
              h="85%"
            >
              <Box w="199px" h="131px">
                <Box
                  w="199px"
                  h="105px"
                  color="#FFFFFF"
                  fontFamily="Unbounded"
                  fontWeight="600"
                  fontSize="24px"
                >
                  Новые турникеты на всех станциях
                </Box>
              </Box>
              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                gap="20px"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                lineHeight="19.2px"
                ml="30px"
              >
                <Box
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="white"
                  gap="20px"
                  justifyContent="space-between"
                  alignItems="center"
                  lineHeight="19.2px"
                >
                  Мы заменили турникеты на всех станциях метро и МЦК, при оплате
                  банковской картой они срабатывают более чем в 2 раза, а по
                  биометрии - в 3 раза быстрее.
                </Box>
                <Box>
                  В скором времени появится возможность оплатить проезд и по
                  СБП.
                </Box>
              </Box>
              <Image src={Turniket} mt="-38px" mr="-30px" />
            </Flex>
          </Box>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
            flexWrap="wrap"
            gap="20px"
          >
            {statistics2.map((box, index) => (
              <Box
                key={index}
                w="380px"
                h="218px"
                bg="#F9F9F9"
                borderRadius="16px"
                boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
              >
                <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
                  <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                    {box.title}
                  </Box>
                  <Box fontFamily="Manrope" fontSize="16px">
                    {box.title2}
                  </Box>
                </Box>

                <Box
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="#6C6C6C"
                  p="20px"
                >
                  {box.description}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              {/* <ShieldRed /> */}
              <Image src={ShieldRed} />
              <Box color="#D34040">БЕЗОПАСНЕЕ</Box>
            </Flex>
          </Center>
          <Flex
            maxW="1180px"
            maxH="175px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
          >
            <Image src={Station} />
            <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
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
          </Flex>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
            flexWrap="wrap"
            gap="20px"
          >
            {statistics3.map((box, index) => (
              <Box
                key={index}
                w="380px"
                h="218px"
                bg="#F9F9F9"
                borderRadius="16px"
                boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)"
              >
                <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
                  <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                    {box.title}
                  </Box>
                  <Box fontFamily="Manrope" fontSize="16px">
                    {box.title2}
                  </Box>
                </Box>

                <Box
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="#6C6C6C"
                  p="20px"
                >
                  {box.description}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
export default MM2010;
