import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
