import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Heading, Text, Flex, VisuallyHidden, Link, HStack, IconButton, Box, VStack, CloseButton, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  
  return (
    <>
    <Nav />
    <Header />
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
