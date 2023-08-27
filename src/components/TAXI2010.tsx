import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import Taxi from "./Images/Taxi.svg";
import CirclesYellow from "./Images/CirclesYellow.png";
import Card from "./Card";

function TAXI2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "4 мин",
      title2: "среднее время подачи такси в час пик",
      description:
        "Такси приезжает очень быстро, вам не придется долго ждать. Время подачи такси сократилось с 2010 года в 8 раз.",
    },
    {
      title: "300 тыс.",
      title2:
        "водителей Москвы и МО зарегистрированы в системе аналитики работы такси",
      description:
        "Благодаря обязательной регистрации в единой системе управления снижается количество ДТП",
    },
    {
      title: "более 1,7 млн",
      title2: "пассажиров в сутки перевозит такси в Москве",
      description:
        "Пассажиропоток увеличился в 35 раз по сравнению с 2010 годом.",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesYellow}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center
          fontFamily="Manrope"
          fontSize="20px"
          pt="35px"
          textAlign="center"
        >
          В 2011 ГОДУ МЫ ВНЕДРИЛИ ЕДИНЫЙ СТАНДАРТ
        </Center>
        <Center
          fontFamily="Unbounded"
          fontWeight="700"
          fontSize="44px"
          textAlign="center"
        >
          ТАКСИ
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
        <Box mt="30px">
          <Center
            maxW="1180px"
            minH="211px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            m="0 auto"
            justifyContent={isSmallerThan1200 ? "center" : "space-between"}
            flexWrap="wrap"
            borderTopLeftRadius="30px"
          >
            <Image src={Taxi} w={isSmallerThan1200 ? "100%" : "auto"} />
            <Box
              w={isSmallerThan1200 ? "" : "350px"}
              bg="white"
              p="20px"
              borderRadius="16px"
            >
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
                Польза во время пандемии
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                Во время пандемии COVID-19 до 600 автомобилей такси каждый день
                доставляли врачей к заболевшим жителям столицы
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </Container>
  );
}
export default TAXI2010;
