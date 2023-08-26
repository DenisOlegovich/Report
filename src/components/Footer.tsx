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
import { ReactNode } from "react";
function Footer() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const footerRef = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFixed(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Container
      mt="50px"
      w="100%"
      h="391px"
      bgImage={Trains}
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
      as="footer"
      position={fixed ? "fixed" : "relative"}
      bottom={0}
      left={0}
      marginTop="auto"
      p="50px 70px"
    >
      <Box position="relative" h="282px">
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

        <Image src={LogoMTFooter} position="absolute" bottom="0px" />
      </Box>
    </Container>
  );
}
export default Footer;
