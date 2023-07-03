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
import MM2010 from "./MM2010";
import NT2010 from "./NT2010";
import PGD2010 from "./PGD2010";
import DD2010 from "./DD2010";
import SHS2010 from "./SHS2010";
function StatisticsOutput() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  return (
    <Container>
      <NavbarStatistics />
      <Flex
        pt="30px"
        pb="30px"
        justifyContent={isSmallerThan1200 ? "center" : "space-between"}
        flexWrap="wrap"
      >
        <Box
          w={isSmallerThan1200 ? "90%" : "380px"}
          h="345px"
          borderRadius="16px"
          p="15px"
          bg="white"
          backgroundImage="url('https://avatars.mds.yandex.net/get-images-cbir/1780006/ecUP-kXPHXY4_c0jP9E3Ag1678/ocr')"
          backgroundPosition="right bottom"
          backgroundRepeat="no-repeat"
        >
          <Flex w="293px" h="38px" alignItems="center">
            <Mark />
            <Box pl="15px" fontFamily="Manrope" fontSize="20px">
              Ваш район
            </Box>
          </Flex>
          <Box
            fontFamily="Unbounded"
            fontWeight="600"
            fontSize="30px"
            pl="44px"
          >
            Измайлово
          </Box>
          <Box
            fontFamily="Manrope"
            fontSize="16px"
            color="#878787"
            w="247px"
            h="57px"
            pl="44px"
          >
            (Основываясь на данных вашей транспортной карты)
          </Box>
        </Box>

        <Box maxW="776px" h="345px" borderRadius="16px" p="15px" bg="white">
          <Box>
            <Box fontFamily="Manrope" fontSize="16px">
              Ваша любимая линия метро
            </Box>
            <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
              Арбатско-Покровская линия
            </Box>
            <ApLine />
            <Box fontFamily="Manrope" fontSize="16px" color="#878787">
              Это самая длинная некольцевая линия метро в Москве (45,1 км)
            </Box>
          </Box>

          <Box pt="50px">
            <Box fontFamily="Manrope" fontSize="16px">
              а еще иногда пользуетесь
            </Box>
            <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
              Большой кольцевой линией
            </Box>
            <BclLine />
            <Box fontFamily="Manrope" fontSize="16px" color="#878787">
              Это самое большое метрокольцо в мире! (70 км)
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box bg="white" borderRadius="16px">
        <Flex
          justifyContent={isSmallerThan1200 ? "center" : "space-between"}
          flexWrap="wrap"
        >
          <Box
            w="647px"
            h="253px"
            borderRadius="16px"
            backgroundImage="url('https://avatars.mds.yandex.net/get-images-cbir/1689385/3PC9Sh4lBIY5A51mOn0k-A5515/ocr')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            p="20px"
          >
            <Box
              w="250px"
              h="51px"
              borderRadius="8px"
              p="8px 12px 8px 12px"
              bg="rgba(255, 255, 255, 0.8)"
            >
              <Flex alignItems="center">
                <Number3 />
                <Box
                  fontFamily="Unbounded"
                  fontWeight="600"
                  fontSize="24px"
                  pl="15px"
                >
                  Измайлово
                </Box>
              </Flex>
            </Box>
          </Box>

          <Center w="532px" h="253px">
            <Box mt="auto" mb="auto">
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
                10 новых станций
              </Box>
              <Box fontFamily="Manrope" fontSize="20px">
                метро открылось в вашем районе
              </Box>
            </Box>
          </Center>
        </Flex>
      </Box>

      <Flex
        justifyContent={isSmallerThan1200 ? "center" : "space-between"}
        flexWrap="wrap"
        pt="30px"
      >
        <Box
          w="578px"
          h="146px"
          borderRadius="16px"
          p="20px"
          bg="linear-gradient(to bottom left, rgba(186, 225, 254, 1), rgba(233, 246, 255, 1))"
          // backgroundImage="url('https://avatars.mds.yandex.net/get-images-cbir/9558167/hFoTo19gdvBNTqulExyZ9A5891/ocr')"
          // backgroundPosition='right bottom'
          // backgroundRepeat='no-repeat'
        >
          <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
            Чем больше — тем выгоднее!
          </Box>
          <Box fontFamily="Monrope" fontSize="16px" w="450px">
            Совершайте поездки по абонементам на 30, 90 или 365 дней и экономьте
            прямо сейчас. Чем чаще Вы пользуетесь транспортом, тем ниже
            стоимость 1 поездки.
          </Box>
        </Box>
        <Box pt={isSmallerThan1200 ? "30px" : "0xp"}>
          <Box
            w="578px"
            h="146px"
            borderRadius="16px"
            p="20px"
            bg="linear-gradient(to bottom left, rgba(242, 205, 227, 1), rgba(255, 244, 228, 1))"
          >
            <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
              Хотите ездить выгодно?
            </Box>
            <Box fontFamily="Monrope" fontSize="16px" w="450px">
              Наш тарифный калькулятор поможетВам подобрать наиболее
              подходящийпроездной билет.
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* <MM2010 /> */}
      {/* <NT2010 /> */}
      {/* <PGD2010 /> */}
      {/* <DD2010 /> */}
      <SHS2010 />
    </Container>
  );
}
export default StatisticsOutput;
