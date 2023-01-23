import React from "react";
import { Box, Container } from "@material-ui/core";

import FormCNPJ from "./FormCNPJ";

export default function FormularioPage() {
  return (
    <div className="formulario">
      <Container>
        <Box mt={2} mb={2}>
          <FormCNPJ />
        </Box>
      </Container>
    </div>
  );
}
