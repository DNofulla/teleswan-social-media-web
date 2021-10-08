import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

export const Button = styled.button`
  width: 4rem;
  height: 2rem;
  outline: 0;
  border-radius: 0;
  border: 1px solid black;
  margin: 3rem;
  cursor: pointer;
  background: rgb(23, 321, 321);

  :hover {
    background: coral;
  }
`;
