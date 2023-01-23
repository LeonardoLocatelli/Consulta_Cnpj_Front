import React from 'react';
import { TextField } from "@material-ui/core";

export default function FormInput({
  id,
  label,
  required,
  ...props
}) {
  return (
    <TextField id={id} fullWidth label={label} variant="outlined" {...props} />
  );
}
