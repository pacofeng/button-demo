import React from "react";
import { InputLabel as MInputLabel, styled } from "@mui/material";
import * as v from "../../styles/variables";

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const InputLabel = styled(MInputLabel)((props) => ({
  color: v.primaryColors.charcoal80,
  top: props.size === "small" ? 0 : props.size === "large" ? -4 : -8,
  fontSize:
    props.size === "small" ? "10px" : props.size === "large" ? "14px" : "12px",
}));

export default InputLabel;
