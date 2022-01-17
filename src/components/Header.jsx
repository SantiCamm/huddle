import React from "react";
import { Button } from "./styled/Button.styled";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledHeader } from "./styled/Header.styled";
import { Logo } from "./styled/Logo.styled";
import { Nav } from "./styled/Nav.styled";
import { Image } from "./styled/Image.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it for free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non impedit adipisci odio. Quibusdam, sint?
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
