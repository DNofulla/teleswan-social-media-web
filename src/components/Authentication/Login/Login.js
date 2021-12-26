import React, { useState, useEffect } from "react";
import {
  LoginForm,
  InnerWrapper,
  Wrapper,
  TeleSwanLogo,
  LoginLabel,
  LoginInput,
  Button,
  ButtonWrapper,
  SignUpLink,
} from "./login.styled";
import { useHistory } from "react-router";
import logo from "../../../assets/TeleSwanMediaLogo-DarkMode.png";
import { useAuth, useAuthState } from "../../../utils/AuthContext";

export default function Login() {
  const history = useHistory();
  const { setState } = useAuthState();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    return () => ac.abort();
  }, []);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogIn = () => {
    login(username, password, setUsername, setPassword, history, setState);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TeleSwanLogo src={logo} />
        <LoginForm>
          <LoginLabel>Username:</LoginLabel>
          <LoginInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <LoginLabel>Password:</LoginLabel>
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <ButtonWrapper>
            <Button title="Log In Button" onClick={handleLogIn}>
              Sign In!
            </Button>
          </ButtonWrapper>
          <SignUpLink href="/register">
            Don't have an account? Click here to sign up!
          </SignUpLink>
        </LoginForm>
      </InnerWrapper>
    </Wrapper>
  );
}
