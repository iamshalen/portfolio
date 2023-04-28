import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Spinner, Flex } from "@chakra-ui/react";

function App() {
  const [color, setColor] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://strapi-eldora.onrender.com/api/profile"
      );
      const data = await response.json();
      setColor(data.data.attributes.themeColour);
      setTimeout(() => setSpinner(false), 1000); // set spinner to false after 10 seconds
    }
    fetchData();
  }, []);

  return (
    <>
      {spinner ? ( // display spinner if spinner state is true
        <Flex align="center" justify="center" height="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={`${color}.500`}
            size="xl"
          />
        </Flex>
      ) : (
        // display content if spinner state is false
        <>
          <Nav color={color} />
          <Header color={color} />
          <About color={color} />
          <Experience color={color} />
          <Projects color={color} />
          <Contact color={color} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
