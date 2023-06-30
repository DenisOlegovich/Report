import React from 'react';
import { Container, Flex, useMediaQuery, Box, Button, Image, Menu , MenuButton,  MenuList, MenuItem} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@chakra-ui/icons'
function ReportAuthorization() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container margin="0 auto">
        <Flex maxW="1180px" h="177px" bg="red" align-items="center" justify-content="center">
            <Box>
                <Box>Ваш персональный отчет о поездках</Box>
                <Box>
Полная статистика Ваших поездок на общественном транспорте г. Москвы по транспортной карте «Тройка»</Box></Box>
            <Box><Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Your Cats
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      
      <span>Fluffybuns the Destroyer</span>
    </MenuItem>
    <MenuItem minH='40px'>
     
      <span>Simon the pensive</span>
    </MenuItem>
  </MenuList>
</Menu><Box></Box></Box></Flex>
    </Container>
  );
}
export default ReportAuthorization;
