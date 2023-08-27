import { Container, Flex, useMediaQuery, Button, Box } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const location = useLocation();
  let main = location.pathname == "/main";

  return (
    <Container fontFamily="heading" overflow="auto" maxW="1280px" m="0 auto">
      <Flex align-items="center" justifyContent="space-between">
        <NavLink to="/main">
          <Button
            maxW="118px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/main" ? "White" : ""}
            bg={location.pathname === "/main" ? "#332B26" : ""}
          >
            Главная
          </Button>
        </NavLink>

        <NavLink to="/metro">
          <Button
            maxW="108px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/metro" ? "White" : ""}
            bg={location.pathname === "/metro" ? "#332B26" : ""}
          >
            Метро
          </Button>
        </NavLink>
        <NavLink to="/groundtransport">
          <Button
            maxW="206px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/groundtransport" ? "White" : ""}
            bg={location.pathname === "/groundtransport" ? "#332B26" : ""}
          >
            Наземный транспорт
          </Button>
        </NavLink>
        <NavLink to="/suburbanrailway">
          <Button
            maxW="180px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/suburbanrailway" ? "White" : ""}
            bg={location.pathname === "/suburbanrailway" ? "#332B26" : ""}
          >
            Пригородное ЖД
          </Button>
        </NavLink>
        <NavLink to="/roads">
          <Button
            maxW="114px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/roads" ? "White" : ""}
            bg={location.pathname === "/roads" ? "#332B26" : ""}
          >
            Дороги
          </Button>
        </NavLink>
        <NavLink to="/sharing">
          <Button
            width="116px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/sharing" ? "White" : ""}
            bg={location.pathname === "/sharing" ? "#332B26" : ""}
          >
            Шеринг
          </Button>
        </NavLink>
        <NavLink to="/taxi">
          <Button
            width="102px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/taxi" ? "White" : ""}
            bg={location.pathname === "/taxi" ? "#332B26" : ""}
          >
            Такси
          </Button>
        </NavLink>
        <NavLink to="/station">
          <Button
            width="121px"
            height="49px"
            padding="15px 32px 15px 32px"
            gap="10px"
            borderTopRadius="16px"
            _hover={{ color: "White", backgroundColor: "#332B26" }}
            color={location.pathname === "/station" ? "White" : ""}
            bg={location.pathname === "/station" ? "#332B26" : ""}
          >
            Вокзалы
          </Button>
        </NavLink>
      </Flex>
    </Container>
  );
}
export default Navbar;
