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
function DD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
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
                  55 км/ч
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  средняя скорость личного транспорта на основных магистралях
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Средняя скорость движения выросла на 22% или на 10 км/ч
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
                  53 минуты
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  время в пути от МКАД до центра города на городском транспорте
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                <b>6 суток в год</b> экономит пассажир в дороге. Время в пути
                сократилось на 21%, от МКАД до центра быстрее на 14 минут
              </Box>
            </Box>
          </Flex>
          <Flex
            maxW="1180px"
            maxH="259px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
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
                  до 30%
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  разгрузятся участки Садового кольца, МКАД, ТТК после полного
                  ввода МСД
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Благодаря скоростному диаметру на дорогах станет еще свободнее
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
                  для 4,5 млн
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  жителей, проживающих в 48 районах, улучшилась транспортная
                  доступность
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Перемещаться по Москве стало удобнее и быстрее
              </Box>
            </Box>
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
                  Мобильное приложение Парковки России
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
                  Удобное приложение для парковок «Парковки России», 95%
                  парковочных сессий оплачиваются в нем. Платиновый призер AVA
                  Digital Awards 2022 в номинации «Приложение для информации»
                </Flex>
              </Box>
              <Image src={LogoParking} mt="-85px" />
            </Flex>
          </Box>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
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
                  ХХХХ
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  платных парковочных мест в районах "ХХХ" и "ХХХ"
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Благодаря платным парковкам растет оборачиваемость парковочных
                мест и вы можете быстрее найти свободное место
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
                  более 10 тыс.
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  парковочных мест для людей с ограниченными возможностями
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Специальные широкие и удобные места, которые составляют не менее
                10% мест на каждой парковке
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
                  более 80
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  перехватывающих парковок обустроено в Москве
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Водители могут бесплатно припарковаться, если затем совершают не
                менее двух поездок на метро, МЦК или МЦД
              </Box>
            </Box>
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
                  Интеллектуальная транспортная система
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
                  ИТС - это единая система управления дорожным движением,
                  сведения из которой поступают в Ситуационный центр Система
                  объединяет работу городских камер, камер фотовидеофиксации,
                  дорожных детекторов и светофоров
                </Flex>
              </Box>
              <Image src={Cameras} mt="-124px" />
            </Flex>
          </Box>
          <Flex
            mt="30px"
            justifyContent={isSmallerThan1000 ? "center" : "space-around"}
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
                  на 34%
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  меньше ДТП в Москве по сравнению с 2010 годом
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                2,5 тысяч жизней сохранено с 2010 года
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
                  3,8 тыс.
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  камер установлено на дорогах Москвы
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Благодаря системе фотовидеофиксации водители становятся
                ответственнее, а дороги - безопаснее
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
export default DD2010;
