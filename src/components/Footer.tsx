import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import Trains from "./Images/Trains.png";
import AppStore from "./Images/AppStore.svg";
import GooglePlay from "./Images/GooglePlay.svg";
import AppGallery from "./Images/AppGallery.svg";
import LogoMTFooter from "./Images/LogoMTFooter.svg";
function Footer() {
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(document.body.scrollHeight <= window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container
      mt="50px"
      w="100%"
      minH="391px"
      bgImage={Trains}
      bgSize={isSmallerThan1200 ? "50%" : ""}
      backgroundPosition="right bottom"
      backgroundRepeat="no-repeat"
      as="footer"
      className="page-footer"
      position="relative"
      bottom={0}
      left={0}
      marginTop="auto"
      p="50px 70px"
    >
      <Box position="relative" minH="282px">
        <Box maxW="591px">
          <Box
            fontFamily="Unbounded"
            fontWeight="600"
            fontSize="24px"
            pb="20px"
          >
            ЖЕЛАЕМ ПРИЯТНЫХ ПОЕЗДОК!
          </Box>
          <Text fontFamily="Manrope" fontSize="20px" pb="40px">
            Еще больше интересной статистики о ваших поездках{" "}
            <Box as="span" color="#D34040">
              в приложении «Метро Москвы».
            </Box>
          </Text>
          <Flex gap="15px" flexWrap="wrap">
            <Image src={AppStore} />
            <Image src={GooglePlay} />
            <Image src={AppGallery} />
          </Flex>
        </Box>

        <Image src={LogoMTFooter} mt="50px" />
      </Box>
    </Container>
  );
}
export default Footer;
