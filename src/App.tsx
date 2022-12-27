import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Hello!</H1>
    </Container>
  );
}

export default App;
