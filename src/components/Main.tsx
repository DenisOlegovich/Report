import React from 'react';
import { Container, Flex, useMediaQuery, Box, Button, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

function Main() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Image src='https://avatars.mds.yandex.net/get-images-cbir/1970235/tzCnJ0SbbAsgok35xoj1Zw1188/ocr' width= "100%" />
  );
}
export default Main;
