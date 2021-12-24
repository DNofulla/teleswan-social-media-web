import React from "react";
import { useHistory } from "react-router";
import {
  Wrapper,
  Button,
  TeleSwanLogo,
  Container,
  InnerWrapper,
} from "./welcome.styled";
import logo from "../../assets/TeleSwanMediaLogo-DarkMode.png";

export default function WelcomePage() {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push("/login");
  };

  const navigateToRegister = () => {
    history.push("/register");
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TeleSwanLogo src={logo} />
        <Container>
          <Button onClick={navigateToLogin}>Log In!</Button>
          <Button onClick={navigateToRegister}>Register!</Button>
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
}
