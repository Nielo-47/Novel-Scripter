import Home from "./pages/home/Home";
import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(180deg, rgba(113, 88, 124, 0.994792) 0%, rgba(35, 44, 128, 0.98961) 52.95%, rgba(32, 32, 35, 0.994792) 100%);
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
