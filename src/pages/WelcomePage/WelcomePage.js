import React from "react";
import { useHistory } from "react-router";
import { Wrapper, Button } from "./welcome.styled";

export default function WelcomePage() {
  const history = useHistory();

  return (
    <Wrapper>
      Hello, Please Sign Up or Log Into your account!
      <div>
        <Button onClick={() => history.push("/register")}>Sign Up</Button>
        <Button onClick={() => history.push("/login")}>Log In</Button>
      </div>
    </Wrapper>
  );
}
