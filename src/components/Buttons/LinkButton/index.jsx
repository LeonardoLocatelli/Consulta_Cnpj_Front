/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from "@material-ui/core";

export default ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};
