import React from "react";

import { Router } from "main";

import { GlobalStyle } from "presentation/styles/styles";

function App() {
  console.log("teste");

  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
