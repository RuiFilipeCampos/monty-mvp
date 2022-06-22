

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import * as ch from "@chakra-ui/react";



const Footer = () => {

    return (
      <>
        <ch.HStack p={4} h="full" w="full" bg="blackAlpha.100">
          <ch.Text>© 2022 Digital Defiance. MIT License. </ch.Text>
          <ch.Spacer />
          <ch.HStack>
            <FaTwitter />
            <FaLinkedin />
            <FaGithub  />
          </ch.HStack>
        </ch.HStack>
      </>
    )
  }
  
  const Layout = (props) => {
  
  
    return (
      <>
        <ch.VStack minH="100vh" mb={-10} h="full">
          <ch.HStack p={8} mb={10} shadow="sm" h="50px" w="full" bg="white">
            <ch.Text>Monty MVP</ch.Text>
            <ch.Spacer />
            <ch.Text>Sphere</ch.Text>
            <ch.Text>Onion</ch.Text>
            <ch.Text>Cut</ch.Text>
            <ch.Text>|</ch.Text>
            <ch.Text>About</ch.Text>
          </ch.HStack>
          <ch.VStack h="full" px={70}>
            {props.children}
          </ch.VStack>
          <ch.Spacer />
          <Footer />
        </ch.VStack>
      </>
    )
  }
  
  export default Layout