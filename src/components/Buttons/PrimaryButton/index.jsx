/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";

export default ({ label, isLoading = false, disabled, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <Box display="flex" alignItems="center" mr={1}>
          <CircularProgress size={20} />
        </Box>
      )}
      {isLoading ? "Aguarde..." : label}
    </Button>
  );
};
