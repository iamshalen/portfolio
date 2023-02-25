import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
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
