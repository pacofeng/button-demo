import React from "react";
import { FormControlLabel as MFormControlLabel, styled } from "@mui/material";

export const FormControlLabel = styled(MFormControlLabel)(() => ({
  color: "#333D47",
  ".MuiFormControlLabel-label.Mui-disabled": {
    color: "#333D47",
  },
  "&:hover": {
    ".MuiCheckbox-root:not(.Mui-disabled), .MuiRadio-root:not(.Mui-disabled)": {
      ".MuiSvgIcon-root": {
        color: "#444444",
      },
    },
    ".MuiCheckbox-root.Mui-checked:not(.Mui-disabled), .MuiRadio-root.Mui-checked:not(.Mui-disabled)":
      {
        ".MuiSvgIcon-root": {
          color: "#0F3556",
        },
      },
  },
}));

export default FormControlLabel;
