import React, { createContext } from "react";
import { withSnackbar } from "notistack";
export const FormularioContext = createContext();

function FormularioProvider({ children }) {
  const exposicaoProvider = {};

  return (
    <FormularioContext.Provider value={exposicaoProvider}>
      {children}
    </FormularioContext.Provider>
  );
}

export default withSnackbar(FormularioProvider, FormularioContext);
