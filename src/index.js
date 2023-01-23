import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Store from "./store";
import App from "./App";

// renderiza o app
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  // dentro do elemento com id root
  document.getElementById("root")

  // possivel colocar mais componentes em um index?
);
