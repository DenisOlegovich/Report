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
function SHS2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container
      bg="white"
      bgImage={CirclesGrey}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          с 2010 года
        </Center>
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          В Москве появились удобные арендные средства передвижения:
        </Center>
        <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
          ШЕРИНГОВЫЕ СЕРВИСЫ
        </Center>
        <Box mt="30px">
          <Box maxW="1180px" maxH="175px" borderRadius="16px" bg="#D34040">
            <Flex
              maxW="1180px"
              maxH="175px"
              borderRadius="16px"
              bg="#FFFFFF"
              shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            >
              <Image src={Sharing} />
              <Box w="100%" h="120px" bg="white" p="20px" borderRadius="16px">
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
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={Velo} />
              <Box color="#828282">ВЕЛОПРОКАТ (С 2013 Г.)</Box>
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
                  7,2 тыс.
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  прокатных велосипедов в Москве
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Для аренды жителям Москвы и гостям столицы доступны механические
                и электро велосипеды
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
                  754 станции
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  проката велосипедов в Москве
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
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={Carsh} />
              <Box color="#828282">КАРШЕРИНГ (С 2015 Г.)</Box>
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
                  30 тыс.
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  автомобилей в парке каршеринга
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                <b>1 место</b> в мире по крупнейшему парку каршеринга
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
                  5
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  поездок на 1 автомобиль каршеринга в сутки
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Каршеринг помогает разгружать дороги столицы
              </Box>
            </Box>
          </Flex>

          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Image src={Scooter} />
              <Box color="#828282">КИКШЕРИНГ (С 2018 Г.)</Box>
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
                  60 тыс.
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  прокатных самокатов в Москве
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Самокаты помогают горожанам добираться до дома от станции метро
                или остановок наземного транспорта
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
                  80%
                </Box>
                <Box fontFamily="Manrope" fontSize="16px">
                  сессий - это поездки с транспортной целью
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontSize="16px"
                color="#6C6C6C"
                p="20px"
              >
                Самокаты получили правовой статус и стали популярными
                транспортными средствами
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
export default SHS2010;
