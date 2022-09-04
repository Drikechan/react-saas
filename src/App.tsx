import "./App.css";
// import { UnauthenticatedApp } from "./views/unauthenticated-app/index";
import styled from "@emotion/styled";
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";

function App(props: any) {
  const { assemblySize } = props;
  return (
    <Container className="App">
      <HashRouter>
        <ConfigProvider componentSize={assemblySize}>
          <Router />
        </ConfigProvider>
      </HashRouter>
      {/* <UnauthenticatedApp /> */}
    </Container>
  );
}
const mapStateToProps = (state) => state.global;
export default connect(mapStateToProps)(App);

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
