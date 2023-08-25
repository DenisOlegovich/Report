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
function TAXI2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
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
                4 мин
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                среднее время подачи такси в час пик
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Такси приезжает очень быстро, вам не придется долго ждать. Время
              подачи такси сократилось с 2010 года в 8 раз.
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
                300 тыс.
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                водителей Москвы и МО зарегистрированы в системе аналитики
                работы такси
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Благодаря обязательной регистрации в единой системе управления
              снижается количество ДТП
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
                более 1,7 млн
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                пассажиров в сутки перевозит такси в Москве
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Пассажиропоток увеличился в 35 раз по сравнению с 2010 годом.
            </Box>
          </Box>
        </Flex>
        <Box mt="30px">
          <Box maxW="1180px" maxH="211px" borderRadius="16px" bg="#D34040">
            <Flex
              maxW="1180px"
              maxH="175px"
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
