import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Image,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import ClockYellow from "./Images/ClockYellow.svg";
import HeartYellow from "./Images/HeartYellow.svg";
import ShieldYellow from "./Images/ShieldYellow.svg";
import Train from "./Images/Train.svg";
import CirclesOrange from "./Images/CirclesOrange.png";
import Station2 from "./Images/Station2.svg";
import Card from "./Card";

function PGD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "ХХ станций",
      title2: "открылось в вашем районе",
      description:
        "Время в пути для жителей столицы сократилось до 52%, области - до 38%",
    },
    {
      title: "5-7 минут",
      title2: "интервал движения поездов в час пик",
      description:
        "МЦД-1 и МЦД-2 создали множество новых вариантов маршрутов в Москве и области",
    },
    {
      title: "на 70%",
      title2: "чаще стали ходить поезда на направлениях с открытием МЦД",
      description:
        "На направлении стало больше поездов, сократились интервал движения",
    },
  ];
  let statistics2 = [
    {
      title: "до 12%",
      title2: "составляет разгрузка линий метро",
      description: "Благодаря МЦД поездки на метро тоже становятся комфортнее",
    },
    {
      title: "100%",
      title2: "вагонов МЦД - это обновленные подвижные составы",
      description:
        "1 место в России по темпам обновления ЖД поездов среди мегаполисов",
    },
    {
      title: "до 75%",
      title2:
        "дешевле стал проезд на направлениях для жителей Московской области",
      description:
        "С МЦД поездки стали дешевле, а пересадки на метро и МЦК - бесплатными",
    },
  ];
  let statistics3 = [
    {
      title: "100%",
      title2: "бактерий и вирусов уничтожает система очистки воздуха",
      description:
        'В поездах "Иволга" постоянно работает современная система очистки воздуха.',
    },
    {
      title: "до 11",
      title2: "камер установлено в каждом вагоне",
      description:
        "Видеонаблюдение помогает нам обеспечивать безопасность пассажиров в транспорте",
    },
  ];
  return (
    <Container
      bg="white"
      bgImage={CirclesOrange}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mt="30px" p="30px" m="0 auto">
        <Center fontFamily="Manrope" fontSize="20px" pt="35px">
          с 2010 года
        </Center>
        <Center
          fontFamily="Unbounded"
          fontWeight="700"
          fontSize="44px"
          textAlign="center"
        >
          ПРИГОРОДНОЕ ЖД
        </Center>
        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={ClockYellow} />
              <Box color="#F6A500">БЫСТРЕЕ</Box>
            </Flex>
          </Center>
          <Flex
            maxW="1180px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            justifyContent={isSmallerThan1200 ? "center" : "space-between"}
            flexWrap="wrap"
            m="0 auto"
            w="auto"
          >
            <Image src={Station2} w={isSmallerThan1200 ? "100%" : "auto"} />
            <Box
              w={isSmallerThan1200 ? "" : "350px"}
              bg="white"
              p="15px"
              borderRadius="16px"
              m="0 auto"
            >
              <Box fontFamily="Unbounded" fontWeight="600" fontSize="30px">
                Курьяново
              </Box>
              <Box fontFamily="Manrope" fontSize="16px">
                новая станция МЦД в вашем районе
              </Box>
              <Box fontFamily="Manrope" fontSize="16px" color="#6C6C6C">
                Московские центральные диаметры - новый вид транспорта, который
                объединяет форматпригородных электричек и метрополитена
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
            {statistics1.map((box, index) => (
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
              <Box>СТАЛ</Box>
              <Image src={HeartYellow} />
              <Box color="#F6A500">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            borderRadius="16px"
            bg="#F6A500"
            bgImage={Train}
            backgroundPosition="right bottom"
            backgroundRepeat="no-repeat"
          >
            <Flex p="20px" alignItems="center" flexWrap="wrap" mr="200px">
              <Box
                w="250px"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="13px 42px 13px 0px"
                lineHeight="120%"
              >
                Новый подвижной состав
              </Box>

              <Flex
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                justifyContent="space-between"
                alignItems="center"
                lineHeight="19.2px"
                flex="1"
                flexWrap="wrap"
                columnGap="20px"
              >
                <UnorderedList>
                  <ListItem mb="12px">плавный ход</ListItem>
                  <ListItem mb="12px">крепления для велосипедов</ListItem>
                  <ListItem mb="12px">USB-зарядки для устройств</ListItem>
                </UnorderedList>
                <UnorderedList>
                  <ListItem mb="12px">широкие дверные проемы</ListItem>
                  <ListItem mb="12px">сквозной проход</ListItem>
                </UnorderedList>
              </Flex>
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
            <Flex gap="10px" alignItems="center">
              <Box>СТАЛ</Box>
              <Image src={ShieldYellow} />
              <Box color="#F6A500">БЕЗОПАСНЕЕ</Box>
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
      </Box>
    </Container>
  );
}
export default PGD2010;
