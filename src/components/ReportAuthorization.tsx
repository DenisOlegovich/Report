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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
function ReportAuthorization() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Box margin='0 auto' pt='40px' pb='40px' borderRadius='md'>
      <Flex
        maxW='1180px'
        minH='177px'
        bg='white'
        padding='40px'
        alignItems='center'
        justifyContent='center'
        flexWrap='wrap'
        borderRadius='16px'>
        <Box p='16px, 20px, 16px, 20px' maxW='489px'>
          <Box fontFamily='Unbounded' fontSize='24px' fontWeight='600'>
            Ваш персональный отчет о поездках
          </Box>
          <Box fontFamily='Monrope' fontSize='16px'>
            Полная статистика Ваших поездок на общественном транспорте г. Москвы
            по транспортной карте «Тройка»
          </Box>
        </Box>
        <Box maxW='486px' pt='15px'>
          <Box
            maxW='486px'
            m='0 auto'
            bg='rgba(244, 244, 244, 1)'
            marginBottom='10px'
            borderRadius='30px'
            color='rgba(135, 135, 135, 1)'>
            <Menu>
              <Flex justifyContent='space-between'>
                <MenuButton
                  as={Button}
                  w='486px'
                  h='42px'
                  borderRadius='30px'
                  rightIcon={<ChevronDownIcon />}>
                  Карта Тройка № 456 876 778
                </MenuButton>
              </Flex>
              <MenuList borderRadius='30px' w='486px'>
                <MenuItem minH='42px' borderRadius='30px'>
                  Карта Тройка № 456 876 778
                </MenuItem>
                <MenuItem minH='42px' borderRadius='30px'>
                  Карта Тройка № 456 876 778
                </MenuItem>
                <MenuItem minH='42px' borderRadius='30px'>
                  Карта Тройка № 456 876 778
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Button
            bg='black'
            color='white'
            size='md'
            height='42px'
            width='486px'
            borderRadius='30px'
            margin='0 auto'>
            Выход из личного кабинета
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
export default ReportAuthorization;
