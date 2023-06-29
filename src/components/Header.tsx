import React from 'react';
import { Container, Flex, useMediaQuery, Box } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container p="20px" gap="30px" fontFamily="heading">
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan800 ? 'center' : 'flex-end'}
      >
        
      </Flex>
    </Container>
  );
}
export default Header;