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
import ClockRed from "./Images/Clock";
import HeartRed from "./Images/HeartRed";
import ShieldRed from "./Images/ShieldRed";
function MM2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container maxW="1280px" bg="white" mt="30px" p="30px" m="0 auto">
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
            <ClockRed />
            <Box color="#D34040">БЫСТРЕЕ</Box>
          </Flex>
        </Center>
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#D34040"
          p="15px"
          m="0 auto"
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
                Новые станции метро - это
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
                  <ListItem>Новые удобные маршруты</ListItem>
                  <ListItem>Меньше времени в пути</ListItem>
                </UnorderedList>
                <UnorderedList w="343.5px">
                  <ListItem>Повышение стоимости жилья на 12 %</ListItem>
                  <ListItem>Больше рабочих мест в районе</ListItem>
                </UnorderedList>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex
          mt="30px"
          justifyContent={isSmallerThan1000 ? "center" : "space-between"}
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
                107
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                новых станций метро и МЦК было открыто с 2010 года
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              <b>1 место</b> в Европе по темпам открытия новых станций
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
                99, 98%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                точность соблюдения графика движения в метро
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              <b>1 место</b> в мире по точности соблюдения графика движения
              поездов
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
                на ХХ
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                больше поездов выходит на Арбатско-Покровскую линию ежедневно
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              На линии стало больше поездов, чтобы сократить ваше время ожидания
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px" gap="10px" alignItems="center">
            <HeartRed />
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
                Новые станции метро - это
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
                Мы заменили турникеты на всех станциях метро и МЦК, при оплате
                банковской картой они срабатывают более чем в 2 раза, а по
                биометрии - в 3 раза быстрее. В скором времени появится
                возможность оплатить проезд и по СБП.
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex
          mt="30px"
          justifyContent={isSmallerThan1000 ? "center" : "space-between"}
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
                70%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                вагонов метро - это новые подвижные составы
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              <b>1 место</b> в Европе по темпам обновления поездов
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
                20%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                современных поездов курсирует на Арбатско-Покровской линии
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              На линии используется современный подвижной состав «Москва»
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
                на ХХ%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                меньше людей в вагонахна Арбатско-Покровской линии
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Мы выпускаем больше поездов в метро, чтобы поездки были еще
              комфортнее
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px" gap="10px" alignItems="center">
            {/* <ShieldRed /> */}
            <Box color="#D34040">БЕЗОПАСНЕЕ</Box>
          </Flex>
        </Center>
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#D34040"
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
                Новые станции метро - это
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
                  <ListItem>Новые удобные маршруты</ListItem>
                  <ListItem>Меньше времени в пути</ListItem>
                </UnorderedList>
                <UnorderedList w="343.5px">
                  <ListItem>Повышение стоимости жилья на 12 %</ListItem>
                  <ListItem>Больше рабочих мест в районе</ListItem>
                </UnorderedList>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex
          mt="30px"
          justifyContent={isSmallerThan1000 ? "center" : "space-between"}
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
                99%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                вентиляционных шахт было модернизировано
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Благодаря современному оборудованию, воздух в метро обновляется
              каждые 20 мин
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
                ХХ км
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                рельс заменили в метро с 2010 года
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              После модернизации инфраструктуры в вагонах стало значительно тише
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
                ХХ
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                навесов установлено на входах в метро
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Они защищают инфраструктуруи пассажиров и от осадков и обледенения
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
export default MM2010;
