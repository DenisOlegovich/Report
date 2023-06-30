import React from 'react';
import { Container, Flex, useMediaQuery, Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

function Navbar() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container p="20px" gap="30px" fontFamily="heading">
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan800 ? 'center' : 'space-between'}
      >
        
          <NavLink
            to="/"
          >
            <Button as={motion.div} width= "118px" height="49px" padding= "15px 32px 15px 32px" border-radius="16px 16px 0px 0px" gap="10px" whileHover={{ backgroundColor:"red" }}>Главная</Button>
          </NavLink>
        
        
        <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Метро
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Наземный транспорт
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Пригорожное ЖД
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Дороги
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Шеринг
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Такси
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? 'black' : '#242424',
              fontSize: '15px',
              gap: '5px',
              
            })}
            to="/"
          >
            Вокзалы
          </NavLink>
        
      </Flex>
    </Container>
  );
}
export default Navbar;
