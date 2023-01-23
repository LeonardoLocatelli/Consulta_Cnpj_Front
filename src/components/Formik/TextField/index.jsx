import React from "react";
import { TextField as TextFieldFormik } from "formik-material-ui";
import { Field } from "formik";

const TextField = ({ name, label, ...props }) => {
  return (
    <Field
      {...props}
      component={TextFieldFormik}
      variant="outlined"
      fullWidth
      name={name}
      label={label}
    />
  );
};

export default TextField;
