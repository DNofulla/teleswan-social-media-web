import React, { useState } from "react";
import {
  RegisterForm,
  InnerWrapper,
  Wrapper,
  TeleSwanLogo,
  RegisterLabel,
  RegisterInput,
  Button,
  ButtonWrapper,
  LoginLink,
} from "./register.styled";
import { useHistory } from "react-router";
import logo from "../../../assets/TeleSwanMediaLogo-DarkMode.png";
import { useAuth } from "../../../utils/AuthContext";

export default function Register() {
  const history = useHistory();
  const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const toLowerCase = () => {
    setUsername(username.toString().toLowerCase());
    setEmail(email.toString().toLowerCase());
  };

  const handleRegister = () => {
    register(
      username,
      password,
      email,
      setUsername,
      setPassword,
      setEmail,
      history,
    );
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TeleSwanLogo src={logo} />
        <RegisterForm>
          <RegisterLabel>Username:</RegisterLabel>
          <RegisterInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
            onBlur={toLowerCase}
          />
          <RegisterLabel>Email:</RegisterLabel>
          <RegisterInput
            type="email"
            value={email}
            onBlur={toLowerCase}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="Email Address"
          />
          <RegisterLabel>Password:</RegisterLabel>
          <RegisterInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <ButtonWrapper>
            <Button title="Register Button" onClick={handleRegister}>
              Sign Up!
            </Button>
          </ButtonWrapper>
          <LoginLink href="/login">
            Already have an account? Click here to sign in!
          </LoginLink>
        </RegisterForm>
      </InnerWrapper>
    </Wrapper>
  );
}
