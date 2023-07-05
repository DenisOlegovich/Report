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
function NT2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container bg="white" mt="30px">
      <Center fontFamily="Manrope" fontSize="20px" pt="35px">
        с 2010 года
      </Center>
      <Center fontFamily="Unbounded" fontWeight="700" fontSize="44px">
        НАЗЕМНЫЙ ТРАНСПОРТ
      </Center>
      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box>СТАЛ</Box>
            <Box> </Box>
            <Box color="#6180EC">БЫСТРЕЕ</Box>
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
                441 км
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                выделенных полос
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              <b>1 место</b> в России по количеству введенных выделенных полос
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
                единиц подвижного состава ежедневно выходят на линию в вашем
                районе
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Благодаря этому время ожидания в среднем сократилось на ХХ минут
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
                выделенных полос в вашем районе
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Скорость движения растет, а аварийность снижается на 30-40%
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box color="#6180EC">КОМФОРТНЕЕ</Box>
          </Flex>
        </Center>
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#61B2EC"
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
                  <ListItem>
                    {" "}
                    <ListItem>USB-зарядки для устройств</ListItem>
                  </ListItem>
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
                ХХ
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                дополнительных маршрутов наземного транспорта организовано в
                вашем районе
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Новая сеть маршрутов "Магистраль" с интервальным движением
              автобусов
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
                новых остановок появилось в вашем районе
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Всего мы установили более 6 тыс. остановок нового типа
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
                автобусов в Москве обновлено
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              1 место в Европе по модернизированному парку
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mt="30px">
        <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
          <Flex mb="25px">
            <Box color="#6180EC">БЕЗОПАСНЕЕ</Box>
          </Flex>
        </Center>
        <Box
          maxW="1180px"
          maxH="175px"
          borderRadius="16px"
          bg="#61B2EC"
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
                Новый экологичный вид транспорта
              </Box>
            </Box>
            <Box fontFamily="Manrope" fontSize="16px" color="white">
              В 2018 году на дороги Москвы вышел первый электробус, а сейчас их
              уже 1055, и они работают на 79 маршрутах:
              <Flex
                gap="20px"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                lineHeight="19.2px"
              >
                <UnorderedList w="343.5px">
                  <ListItem>не загрязняют окружающую среду</ListItem>
                  <ListItem>работают на 30% тише автобуса</ListItem>
                  <ListItem>запас хода после подзарядки около 80 км</ListItem>
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
                на 20%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                тише движение трамвайных путей благодаря модернизации
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Проводим ремонт только в выходные и без полного перекрытия
              движения
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
                70%
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                трамвайных путей отделены от автодороги
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              На 35% сократилось количество задержек из-за аварий на путях
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
                подвижного состава оснащено системой «Антисон»
              </Box>
            </Box>

            <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C" p="20px">
              Система отслеживает состояние водителя в реальном времени
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
export default NT2010;