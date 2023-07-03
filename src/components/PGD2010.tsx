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
function PGD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container bg="white" mt="30px">
      <Center fontFamily="Manrope" fontSize="20px" pt="35px">
        с 2010 года
      </Center>
      <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
        ПРИГОРОДНОЕ ЖД
      </Center>
      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box>СТАЛ</Box>
            <Box> </Box>
            <Box color="#F6A500">БЫСТРЕЕ</Box>
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
                ХХ станций
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                открылось в вашем районе
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Время в пути для жителей столицы сократилось до 52%, области - до
              38%
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
                5-7 минут
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                интервал движения поездов в час пик
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              МЦД-1 и МЦД-2 создали множество новых вариантов маршрутов в Москве
              и области
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
                на 70%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                чаще стали ходить поезда на направлениях с открытием МЦД
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              На направлении стало больше поездов, сократились интервал движения
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box color="#F6A500">КОМФОРТНЕЕ</Box>
          </Flex>
        </Center>
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#F6A500"
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
                до 12%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                составляет разгрузка линий метро
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Благодаря МЦД поездки на метро тоже становятся комфортнее
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
                100%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                вагонов МЦД - это обновленные подвижные составы
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              <b>1 место</b> в России по темпам обновления ЖД поездов среди
              мегаполисов
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
                до 75%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                дешевле стал проезд на направлениях для жителей Московской
                области
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              С МЦД поездки стали дешевле, а пересадки на метро и МЦК -
              бесплатными
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box color="#F6A500">БЕЗОПАСНЕЕ</Box>
          </Flex>
        </Center>

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
                100%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                бактерий и вирусов уничтожает система очистки воздуха
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              В поездах "Иволга" постоянно работает современная система очистки
              воздуха.
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
                до 11
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                камер установлено в каждом вагоне
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Видеонаблюдение помогает нам обеспечивать безопасность пассажиров
              в транспорте
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
export default PGD2010;
