import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "routes";

import * as themes from "styles/theme";
import "./assets/styles/global.scss";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={themes.dark}>
        <Routes />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
