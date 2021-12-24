import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #323232;
`;

export const TeleSwanLogo = styled.img`
  width: 20rem;
`;

export const Container = styled.div`
  display: grid;
`;

export const Button = styled.button`
  width: 25rem;
  height: 3rem;
  margin-block: 0.5rem;
  border-radius: 5px;
  outline: none;
  background-color: black;
  border: 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const InnerWrapper = styled.div`
  width: 30rem;
  border: 1px solid white;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: large;
  color: white;
  padding-block: 4rem;
  border-radius: 5px;
  background-color: #121212;
`;
