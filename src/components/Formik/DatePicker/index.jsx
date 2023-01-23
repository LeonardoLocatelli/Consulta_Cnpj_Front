/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { Field } from "formik";

export default ({ name, label, ...props }) => {
  return (
    <Field
      component={KeyboardDatePicker}
      label={label}
      name={name}
      inputVariant="outlined"
      fullWidth
      format="DD/MM/YYYY"
      invalidDateMessage="Informe uma data válida."
      minDateMessage="Informe uma data válida."
      maxDateMessage="Informe uma data válida."
      {...props}
    />
  );
};
