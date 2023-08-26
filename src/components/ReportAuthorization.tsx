import React from "react";
import {
  Container,
  Flex,
  useMediaQuery,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
function ReportAuthorization() {
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");

  return (
    <Box pt="40px" pb="40px" borderRadius="md">
      <Flex
        maxW="1180px"
        minH="177px"
        bg="white"
        padding="40px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        borderRadius="16px"
      >
        <Box p="16px, 20px, 16px, 20px" maxW="489px">
          <Box fontFamily="Unbounded" fontSize="24px" fontWeight="600">
            Ваш персональный отчет о поездках
          </Box>
          <Box fontFamily="Monrope" fontSize="16px">
            Полная статистика Ваших поездок на общественном транспорте г. Москвы
            по транспортной карте «Тройка»
          </Box>
        </Box>
        <Box mt="15px" w={isSmallerThan550 ? "90%" : "486px"}>
          <Center
            w={isSmallerThan550 ? "90%" : "486px"}
            m="0 auto"
            bg="rgba(244, 244, 244, 1)"
            marginBottom="10px"
            borderRadius="8px"
            color="rgba(135, 135, 135, 1)"
          >
            <Menu>
              <Flex justifyContent="space-between">
                <MenuButton
                  as={Button}
                  w={isSmallerThan550 ? "90%" : "486px"}
                  h="42px"
                  borderRadius="8px"
                >
                  Карта Тройка № 456 876 778
                </MenuButton>
              </Flex>
              <MenuList
                borderRadius="8px"
                w={isSmallerThan550 ? "90%" : "486px"}
              >
                <MenuItem minH="42px" borderRadius="8px">
                  Карта Тройка № 456 876 778
                </MenuItem>
                <MenuItem minH="42px" borderRadius="8px">
                  Карта Тройка № 456 876 778
                </MenuItem>
                <MenuItem minH="42px" borderRadius="8px">
                  Карта Тройка № 456 876 778
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
          <Center m="0 auto">
            <Button
              bg="black"
              color="white"
              height="42px"
              borderRadius="30px"
              w={isSmallerThan550 ? "90%" : "486px"}
            >
              Выход из личного кабинета
            </Button>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
export default ReportAuthorization;
