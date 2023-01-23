/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

export default ({ children, className }) => {
  const theme = useTheme();
  const color = theme.palette.type === "dark" ? "secondary" : "light-grey";

  return (
    <Typography component="h2" variant="h4" color={color} className={className}>
      {children}
    </Typography>
  );
};
