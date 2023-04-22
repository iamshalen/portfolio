import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://strapi-eldora.onrender.com/api/profile"
      );
      const data = await response.json();
      setColor(data.data.attributes.themeColour);
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
