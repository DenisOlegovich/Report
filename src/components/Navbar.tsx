import { Container, Flex, useMediaQuery, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container fontFamily="heading" overflow="auto" maxW="1280px" m="0 auto">
      <Flex align-items="center" justifyContent="space-between">
        <NavLink to="/main">
          <Button
            as={motion.div}
            maxW="118px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Главная
          </Button>
        </NavLink>

        <NavLink to="/metro">
          <Button
            as={motion.div}
            maxW="108px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Метро
          </Button>
        </NavLink>
        <NavLink to="/groundtransport">
          <Button
            as={motion.div}
            maxW="206px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Наземный транспорт
          </Button>
        </NavLink>
        <NavLink to="/suburbanrailway">
          <Button
            as={motion.div}
            maxW="180px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Пригородное ЖД
          </Button>
        </NavLink>
        <NavLink to="/roads">
          <Button
            as={motion.div}
            maxW="114px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Дороги
          </Button>
        </NavLink>
        <NavLink to="/sharing">
          <Button
            as={motion.div}
            width="116px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Шеринг
          </Button>
        </NavLink>
        <NavLink to="/taxi">
          <Button
            as={motion.div}
            width="102px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Такси
          </Button>
        </NavLink>
        <NavLink to="/station">
          <Button
            as={motion.div}
            width="121px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            whileHover={{ color: "White", backgroundColor: "Black" }}
          >
            Вокзалы
          </Button>
        </NavLink>
      </Flex>
    </Container>
  );
}
export default Navbar;
