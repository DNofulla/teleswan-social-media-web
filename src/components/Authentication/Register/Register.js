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

export default function Register() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
    console.log("Username: " + text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log("Password: " + text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    console.log("Email: " + text);
  };

  const toLowerCase = () => {
    setUsername(username.toString().toLowerCase());
    setEmail(email.toString().toLowerCase());
  };

  const handleRegister = async () => {
    let hasError = false;

    if (!username || !password || !email) {
      alert("An error has occurred!", "Don't leave Empty Fields!", [
        {
          text: "OK",
          onPress: () => console.log("Error Alert Closed!"),
        },
      ]);
      hasError = true;
    } else if (
      !/^[a-zA-Z0-9._][^~`!@#$%^&*()\-+={}\[ \];:'"<|>,/?]{4,24}$/.test(
        username,
      )
    ) {
      alert(
        "An error has occurred!",
        "Please enter a username 4 to 24 characters long!",
        [
          {
            text: "OK",
            onPress: () => console.log("Error Alert Closed!"),
          },
        ],
      );
      hasError = true;
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()_\-+={}\[ \];:'"<|>,./?])(?=.*[a-zA-Z]).{8,24}$/.test(
        password,
      )
    ) {
      alert(
        "An error has occurred!",
        "Please enter a password 8 to 24 characters long that contains at least 1 Upper Case letter, 1 Lower Case letter, 1 Number and 1 Special Character!",
        [
          {
            text: "OK",
            onPress: () => console.log("Error Alert Closed!"),
          },
        ],
      );
      hasError = true;
    } else if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email,
      )
    ) {
      alert("An error has occurred! Please enter a valid email!");
      hasError = true;
    }

    if (hasError === false) {
      try {
        let res = await fetch("http://192.168.1.148:8080/users/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            displayName: username,
            email: email,
            password: password,
          }),
        });

        console.log(res.json());

        alert("Success! Your account has been successfully created!");
        setUsername("");
        setEmail("");
        setPassword("");
        history.push("/login");
      } catch (error) {
        console.error(error);
        alert("An error has occurred! Please provide valid information!");
        setUsername("");
        setEmail("");
        setPassword("");
      }
    }
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
