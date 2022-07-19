import "./App.css";
// import { UnauthenticatedApp } from "./views/unauthenticated-app/index";
import styled from "@emotion/styled";
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";

function App() {
  return (
    <Container className="App">
      <HashRouter>
        <Router />
      </HashRouter>
      {/* <UnauthenticatedApp /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
