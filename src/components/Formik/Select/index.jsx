/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { Select } from "formik-material-ui";
import { Field } from "formik";

export default ({ name, label, items }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Field
        component={Select}
        name={name}
        fullWidth
        variant="outlined"
        label={label}
        labelId={`${name}-label`}
      >
        {items.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
};
