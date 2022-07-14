import React from "react";
import "./App.css";
import { UnauthenticatedApp } from "./views/unauthenticated-app/index";
import styled from "@emotion/styled";

function App() {
  return (
    <Container className="App">
      <UnauthenticatedApp />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
