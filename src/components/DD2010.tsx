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
import ClockGreen from "./Images/ClockGreen.svg";
import HeartGreen from "./Images/HeartGreen.svg";
import ShieldGreen from "./Images/ShieldGreen.svg";
import CirclesGreen from "./Images/CirclesGreen.png";
import CirclesParking from "./Images/CirclesParking.png";
import Road from "./Images/Road.svg";
import LogoParking from "./Images/LogoParking.svg";
import Cameras from "./Images/Cameras.svg";
import Card from "./Card";
function DD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "55 км/ч",
      title2: "средняя скорость личного транспорта на основных магистралях",
      description: "Средняя скорость движения выросла на 22% или на 10 км/ч",
    },
    {
      title: "53 минуты",
      title2: "время в пути от МКАД до центра города на городском транспорте",
      description:
        "6 суток в год экономит пассажир в дороге. Время в пути сократилось на 21%, от МКАД до центра быстрее на 14 минут",
    },
  ];
  let statistics2 = [
    {
      title: "до 30%",
      title2:
        "разгрузятся участки Садового кольца, МКАД, ТТК после полного ввода МСД",
      description:
        "Благодаря скоростному диаметру на дорогах станет еще свободнее",
    },
    {
      title: "для 4,5 млн",
      title2:
        "жителей, проживающих в 48 районах, улучшилась транспортная доступность",
      description: "Перемещаться по Москве стало удобнее и быстрее",
    },
  ];
  let statistics3 = [
    {
      title: "ХХХХ",
      title2: 'платных парковочных мест в районах "ХХХ" и "ХХХ"',
      description:
        "Благодаря платным парковкам растет оборачиваемость парковочных мест и вы можете быстрее найти свободное место",
    },
    {
      title: "более 10 тыс.",
      title2: "парковочных мест для людей с ограниченными возможностями",
      description:
        "Специальные широкие и удобные места, которые составляют не менее 10% мест на каждой парковке",
    },
    {
      title: "более 80",
      title2: "перехватывающих парковок обустроено в Москве",
      description:
        "Водители могут бесплатно припарковаться, если затем совершают не менее двух поездок на метро, МЦК или МЦД",
    },
  ];
  let statistics4 = [
    {
      title: "на 34%",
      title2: "меньше ДТП в Москве по сравнению с 2010 годом",
      description: "2,5 тысяч жизней сохранено с 2010 года",
    },
    {
      title: "3,8 тыс.",
      title2: "камер установлено на дорогах Москвы",
      description:
        "Благодаря системе фотовидеофиксации водители становятся ответственнее, а дороги - безопаснее",
    },
  ];

  return (
    <Container
      bg="white"
      bgImage={CirclesGreen}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          с 2010 года
        </Center>
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          ДОРОЖНОЕ ДВИЖЕНИЕ
        </Center>
        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              {/* <ClockRed /> */}
              <Image src={ClockGreen} />
              <Box color="#68AD45">БЫСТРЕЕ</Box>
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
          <Flex
            maxW="1180px"
            h="259px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            mt="20px"
            ml="auto"
            mr="auto"
          >
            <Image src={Road} />
            <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
                Московский скоростной диаметр
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                Мы постоянно строим новые развязки и дороги, а недавно мы
                запустили Основной участок МСД - новую транспортную магистраль
                регионального уровня
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
              {/* <ClockRed /> */}
              <Image src={HeartGreen} />
              <Box color="#68AD45">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            maxH="175px"
            borderRadius="16px"
            bg="#68AD45"
            p="15px"
            bgImage={CirclesParking}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            ml="auto"
            mr="auto"
          >
            <Flex
            // justifyContent="space-between"
            >
              <Box
                w="426px"
                h="105px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="13px 42px 13px 0px"
                lineHeight="120%"
              >
                Мобильное приложение Парковки России
              </Box>
              <Box>
                <Center
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="white"
                  gap="20px"
                  h="100%"
                  lineHeight="19.2px"
                  flexDirection="column"
                >
                  <Box>
                    Удобное приложение для парковок «Парковки России», 95%
                    парковочных сессий оплачиваются в нем.
                  </Box>
                  <Box>
                    Платиновый призер AVA Digital Awards 2022 в номинации
                    «Приложение для информации»
                  </Box>
                </Center>
              </Box>
              <Image src={LogoParking} mt="-85px" />
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

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              {/* <ClockRed /> */}
              <Image src={ShieldGreen} />
              <Box color="#68AD45">БЕЗОПАСНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            maxH="175px"
            borderRadius="16px"
            bg="#396522"
            p="15px"
            ml="auto"
            mr="auto"
          >
            <Flex
            // justifyContent="space-between"
            >
              <Center
                w="360px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="0px 42px 13px 0px"
                lineHeight="120%"
              >
                Интеллектуальная транспортная система
              </Center>

              <Center
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                gap="20px"
                h="100%"
                lineHeight="19.2px"
                flexDirection="column"
                mt="auto"
                mb="auto"
              >
                <Box>
                  ИТС - это единая система управления дорожным движением,
                  сведения из которой поступают в Ситуационный центр
                </Box>
                <Box>
                  Система объединяет работу городских камер, камер
                  фотовидеофиксации, дорожных детекторов и светофоров
                </Box>
              </Center>
              <Image src={Cameras} mt="-124px" />
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
            {statistics4.map((box, index) => (
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
export default DD2010;
