import { createTheme } from "@material-ui/core/styles";
import { orange, lightGreen, red } from "@material-ui/core/colors";

import * as colors from "./colors";

export const light = createTheme({
  palette: {
    type: "light",
    primary: colors.light.primary,
    secondary: orange,
    danger: red,
    background: {
      default: colors.light.background,
    },
  },
});

export const dark = createTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: lightGreen,
  },
});
