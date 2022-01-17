import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import { theme } from "./themes/theme";
import content from "./content";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card item={item} key={index} index={index}/>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
