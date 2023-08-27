import { Container, Flex, useMediaQuery, Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavbarStatistics() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container
      fontFamily="Unbounded"
      fontSize="18px"
      fontWeight="600"
      overflow="auto"
    >
      <Flex align-items="center" justifyContent="space-between" gap="10px">
        <NavLink to="/">
          <Button
            as={motion.div}
            maxW="197px"
            height="22px"
            padding="15px 32px 15px 32px"
            borderTopRadius="16px"
          >
            <Box as={motion.div} opacity="50%" whileHover={{ opacity: "100%" }}>
              МЕТРОПОЛИТЕН
            </Box>
          </Button>
        </NavLink>

        <NavLink to="/">
          <Button
            as={motion.div}
            maxW="284px"
            height="22px"
            padding="15px 32px 15px 32px"
            borderTopRadius="16px"
          >
            <Box as={motion.div} opacity="50%" whileHover={{ opacity: "100%" }}>
              НАЗЕМНЫЙ ТРАНСПОРТ
            </Box>
          </Button>
        </NavLink>
        <NavLink to="/">
          <Button
            as={motion.div}
            maxW="224px"
            height="22px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
          >
            <Box as={motion.div} opacity="50%" whileHover={{ opacity: "100%" }}>
              ПРИГОРОДНОЕ ЖД
            </Box>
          </Button>
        </NavLink>
        <NavLink to="/">
          <Button
            as={motion.div}
            maxW="284px"
            height="22px"
            padding="15px 32px 15px 32px"
            borderTopRadius="16px"
          >
            <Box as={motion.div} opacity="50%" whileHover={{ opacity: "100%" }}>
              ДОРОЖНОЕ ДВИЖЕНИЕ
            </Box>
          </Button>
        </NavLink>
        <NavLink to="/">
          <Button
            as={motion.div}
            maxW="115px"
            height="22px"
            padding="15px 32px 15px 32px"
            borderTopRadius="16px"
          >
            <Box as={motion.div} opacity="50%" whileHover={{ opacity: "100%" }}>
              ИСТОРИИ
            </Box>
          </Button>
        </NavLink>
      </Flex>
    </Container>
  );
}
export default NavbarStatistics;
