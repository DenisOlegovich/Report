import React from "react";
import { Container, Flex, useMediaQuery, Box } from "@chakra-ui/react";
import LogoMT from "./Images/LogoMT";

function Footer() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container mt="30px" p="16px 16px 0px 0px" w="100%">
      <Box>
        <Box fontFamily="Unbounded" fontWeight="600" fontSize="24px">
          ЖЕЛАЕМ ПРИЯТНЫХ ПОЕЗДОК!
        </Box>
        <Box fontFamily="Manrope" fontSize="20px">
          Еще больше интересной статистики о ваших поездках в приложении «Метро
          Москвы».
        </Box>
      </Box>
    </Container>
  );
}
export default Footer;
