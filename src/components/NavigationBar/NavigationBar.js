import React from "react";
import { A, Li, Nav, Ul } from "./navigation.styled";

export default function NavigationBar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <A>Item 1</A>
        </Li>

        <Li>
          <A>Item 2</A>
        </Li>

        <Li>
          <A>Item 3</A>
        </Li>

        <Li>
          <A>Item 4</A>
        </Li>

        <Li>
          <A>Item 5</A>
        </Li>
      </Ul>
    </Nav>
  );
}
