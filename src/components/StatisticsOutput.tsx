import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";

import NavbarStatistics from "./NavbarStatistics";
import Mark from "./Images/Mark";
import ApLine from "./Images/ApLine.svg";
import BcLine from "./Images/BcLine.svg";
import Izmailovo from "./Images/Izmailovo.svg";

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
        gap="30px 0"
      >
        <Box
          w={isSmallerThan1200 ? "90%" : "380px"}
          h={isSmallerThan1200 ? "auto" : "345px"}
          borderRadius="16px"
          p="15px"
          bg="white"
          backgroundImage="url('https://i.ibb.co/d4YmV0X/image-150.jpg')"
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
            h="57px"
            pl="44px"
          >
            (Основываясь на данных вашей транспортной карты)
          </Box>
        </Box>

        <Box
          w={isSmallerThan1200 ? "90%" : "776px"}
          h={isSmallerThan1200 ? "auto" : "345px"}
          borderRadius="16px"
          p="15px"
          bg="white"
        >
          <Box>
            <Box fontFamily="Manrope" fontSize="16px">
              Ваша любимая линия метро
            </Box>
            <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
              Арбатско-Покровская линия
            </Box>
            <Image src={ApLine} />
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
            <Image src={BcLine} />
            <Box fontFamily="Manrope" fontSize="16px" color="#878787">
              Это самое большое метрокольцо в мире! (70 км)
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex
        justifyContent={isSmallerThan1200 ? "center" : "space-between"}
        flexWrap="wrap"
        bg="white"
        borderRadius="16px"
        m="0 auto"
        w={isSmallerThan1200 ? "90%" : ""}
      >
        <Image src={Izmailovo} w={isSmallerThan1200 ? "100%" : "auto"} />

        <Center w="532px" p="20px">
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

      <Center
        justifyContent={isSmallerThan1200 ? "center" : "space-between"}
        flexWrap="wrap"
        pt="30px"
        pb="30px"
        gap="30px 0"
      >
        <Box
          w={isSmallerThan1200 ? "90%" : "578px"}
          h={isSmallerThan1200 ? "auto" : "146px"}
          borderRadius="16px"
          p="20px"
          bg="url('https://svgshare.com/i/utQ.svg') right no-repeat,linear-gradient(to bottom left, rgba(186, 225, 254, 1), rgba(233, 246, 255, 1))"
        >
          <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
            Чем больше — тем выгоднее!
          </Box>
          <Box fontFamily="Monrope" fontSize="16px" maxW="450px">
            Совершайте поездки по абонементам на 30, 90 или 365 дней и экономьте
            прямо сейчас. Чем чаще Вы пользуетесь транспортом, тем ниже
            стоимость 1 поездки.
          </Box>
        </Box>

        <Box
          w={isSmallerThan1200 ? "90%" : "578px"}
          h={isSmallerThan1200 ? "auto" : "146px"}
          borderRadius="16px"
          p="20px"
          bg="url('https://svgshare.com/i/uwu.svg') right top no-repeat,linear-gradient(to bottom left, rgba(242, 205, 227, 1), rgba(255, 244, 228, 1))"
        >
          <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
            Хотите ездить выгодно?
          </Box>
          <Box fontFamily="Monrope" fontSize="16px" maxW="450px">
            Наш тарифный калькулятор поможет Вам подобрать наиболее
            подходящийпроездной билет.
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
export default StatisticsOutput;
