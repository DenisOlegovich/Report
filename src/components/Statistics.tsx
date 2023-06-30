import React from 'react';
import { Container, Flex, useMediaQuery, Box, Button, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import ReportAuthorization from './ReportAuthorization';
function Statistics() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container maxW="1180px" h="177px"  m="0 auto">
        <Box display="flex" align-items="center" justify-content="center">
        <Box w="571" h="53" fontFamily="Unbounded" fontSize="44" fontWeight="600" margin= "0 auto">ВАША СТАТИСТИКА</Box>
        </Box>
        <ReportAuthorization/>
    </Container>
  );
}
export default Statistics;
