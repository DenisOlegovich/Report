import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import ClockGreen from "./Images/ClockGreen.svg";
import HeartGreen from "./Images/HeartGreen.svg";
import ShieldGreen from "./Images/ShieldGreen.svg";
import CirclesGreen from "./Images/CirclesGreen.png";
import CirclesParking from "./Images/CirclesParking.png";
import Road from "./Images/Road.svg";
import LogoParking from "./Images/LogoParking.svg";
import Cameras from "./Images/Cameras.svg";
import Card from "./Card";
function DD2010() {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  let statistics1 = [
    {
      title: "55 км/ч",
      title2: "средняя скорость личного транспорта на основных магистралях",
      description: "Средняя скорость движения выросла на 22% или на 10 км/ч",
    },
    {
      title: "53 минуты",
      title2: "время в пути от МКАД до центра города на городском транспорте",
      description:
        "6 суток в год экономит пассажир в дороге. Время в пути сократилось на 21%, от МКАД до центра быстрее на 14 минут",
    },
  ];
  let statistics2 = [
    {
      title: "до 30%",
      title2:
        "разгрузятся участки Садового кольца, МКАД, ТТК после полного ввода МСД",
      description:
        "Благодаря скоростному диаметру на дорогах станет еще свободнее",
    },
    {
      title: "для 4,5 млн",
      title2:
        "жителей, проживающих в 48 районах, улучшилась транспортная доступность",
      description: "Перемещаться по Москве стало удобнее и быстрее",
    },
  ];
  let statistics3 = [
    {
      title: "ХХХХ",
      title2: 'платных парковочных мест в районах "ХХХ" и "ХХХ"',
      description:
        "Благодаря платным парковкам растет оборачиваемость парковочных мест и вы можете быстрее найти свободное место",
    },
    {
      title: "более 10 тыс.",
      title2: "парковочных мест для людей с ограниченными возможностями",
      description:
        "Специальные широкие и удобные места, которые составляют не менее 10% мест на каждой парковке",
    },
    {
      title: "более 80",
      title2: "перехватывающих парковок обустроено в Москве",
      description:
        "Водители могут бесплатно припарковаться, если затем совершают не менее двух поездок на метро, МЦК или МЦД",
    },
  ];
  let statistics4 = [
    {
      title: "на 34%",
      title2: "меньше ДТП в Москве по сравнению с 2010 годом",
      description: "2,5 тысяч жизней сохранено с 2010 года",
    },
    {
      title: "3,8 тыс.",
      title2: "камер установлено на дорогах Москвы",
      description:
        "Благодаря системе фотовидеофиксации водители становятся ответственнее, а дороги - безопаснее",
    },
  ];

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
        <Center
          fontFamily="Unbounded"
          fontWeight="700"
          fontSize="44px"
          textAlign="center"
        >
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
          <Flex
            maxW="1180px"
            borderRadius="16px"
            bg="#FFFFFF"
            shadow="0px 4px 8px 0px #0000000F,  0px 0px 4px 0px #0000000A"
            mt="20px"
            ml="auto"
            mr="auto"
            flexWrap="wrap"
            borderTopLeftRadius="30px"
          >
            <Image src={Road} w={isSmallerThan1200 ? "100%" : "auto"} />
            <Box
              w={isSmallerThan1200 ? "100%" : "360px"}
              bg="white"
              p="20px"
              borderRadius="16px"
            >
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
            <Flex mb="25px" gap="10px" alignItems="center">
              {/* <ClockRed /> */}
              <Image src={HeartGreen} />
              <Box color="#68AD45">КОМФОРТНЕЕ</Box>
            </Flex>
          </Center>
          <Box
            maxW="1180px"
            borderRadius="16px"
            bg="#68AD45"
            ml="auto"
            mr="auto"
            position="relative"
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
                Мобильное приложение Парковки России
              </Box>
              <Box>
                <Flex
                  fontFamily="Manrope"
                  fontSize="16px"
                  color="white"
                  gap="20px"
                  lineHeight="19.2px"
                  flex="1"
                  flexWrap="wrap"
                  w={isSmallerThan1000 ? "100%" : "530px"}
                >
                  <Box>
                    Удобное приложение для парковок «Парковки России», 95%
                    парковочных сессий оплачиваются в нем.
                  </Box>
                  <Box>
                    Платиновый призер AVA Digital Awards 2022 в номинации
                    «Приложение для информации»
                  </Box>
                </Flex>
              </Box>
              <Image
                src={CirclesParking}
                position="absolute"
                right="0px"
                bottom="-50px"
              />
              <Image
                src={LogoParking}
                mt="-85px"
                position="absolute"
                right="137px"
              />
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

        <Box mt="30px">
          <Center fontFamily="Unbounded" fontWeight="600" fontSize="20px">
            <Flex mb="25px" gap="10px" alignItems="center">
              {/* <ClockRed /> */}
              <Image src={ShieldGreen} />
              <Box color="#68AD45">БЕЗОПАСНЕЕ</Box>
            </Flex>
          </Center>
          <Center
            maxW="1180px"
            minH="175px"
            borderRadius="16px"
            bg="#396522"
            m="0 auto"
            position="relative"
          >
            <Flex p="20px" alignItems="center" flexWrap="wrap">
              <Center
                maxW="360px"
                w="auto"
                color="#FFFFFF"
                fontFamily="Unbounded"
                fontWeight="600"
                fontSize="24px"
                p="0px 42px 13px 0px"
                lineHeight="120%"
              >
                Интеллектуальная транспортная система
              </Center>

              <Flex
                fontFamily="Manrope"
                fontSize="16px"
                color="white"
                alignItems="center"
                lineHeight="19.2px"
                flex="1"
                flexWrap="wrap"
                rowGap="20px"
                mr="300px"
              >
                <Box>
                  ИТС - это единая система управления дорожным движением,
                  сведения из которой поступают в Ситуационный центр
                </Box>
                <Box>
                  Система объединяет работу городских камер, камер
                  фотовидеофиксации, дорожных детекторов и светофоров
                </Box>
              </Flex>
              <Image
                src={Cameras}
                position="absolute"
                bottom="0px"
                right="0px"
              />
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
            {statistics4.map((box, index) => (
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
export default DD2010;
