import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #323232;
`;

export const InnerWrapper = styled.div`
  width: 65rem;
  height: 20rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  color: white;
  padding-block: 3rem;
  border-radius: 5px;
  background-color: #121212;
`;

export const TeleSwanLogo = styled.img`
  width: 25rem;
  margin-right: 5rem;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;

  flex-wrap: wrap;
`;

export const LoginLabel = styled.label`
  text-align: left;
  font-size: 20pt;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const LoginInput = styled.input`
  height: 2.5rem;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 16pt;
  padding-inline: 10px;
  background-color: #323532;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding-block: 0.7rem;
  font-size: 20pt;
  background-color: black;
  border: none;
  border-radius: 5px;
  outline: none;
  color: white;
  cursor: pointer;
`;

export const SignUpLink = styled.a`
  text-align: center;
  font-size: 12pt;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  color: white;
`;
