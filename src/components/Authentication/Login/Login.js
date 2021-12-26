import React, { useState } from "react";
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
import { useAuthState } from "../../../utils/AuthContext";

export default function Login() {
  const history = useHistory();
  const { state, setState } = useAuthState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
    console.log("Username: " + text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log("Password: " + text);
  };

  const handleLogIn = async () => {
    let hasError = false;

    if (!username || !password) {
      alert("An error has occurred! Don't leave Empty Fields!");
      hasError = true;
    }

    if (hasError === false) {
      try {
        let res = await fetch("http://192.168.1.148:8080/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const json = await res.json();

        // console.log(json);

        try {
          const jsonValue = JSON.stringify(json);
          await localStorage.setItem("@session", jsonValue);

          const session = JSON.parse(localStorage.getItem("@session"));

          let authCondition =
            session &&
            Date.parse(session.cookie.expires) > Date.now() &&
            session.sessionID &&
            session.passport.user;

          setState({
            isAuth: authCondition ? true : false,
            user: authCondition ? session.passport.user : null,
            sessionID: authCondition ? session.sessionID : null,
          });

          // console.log(state);
        } catch (e) {
          console.log(`Error storing session to Local Storage: \n${e}`);
        }

        setUsername("");
        setPassword("");
        if (json.message) {
          alert(json.message);
        } else {
          history.push("/feed");
        }
      } catch (error) {
        console.error(error);
        alert("An error has occurred!");
        setUsername("");
        setPassword("");
      }
    }
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
