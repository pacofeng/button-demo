import React from "react";
import { Radio as MRadio, styled } from "@mui/material";

export const Radio = styled(MRadio)(() => ({
  fontSize: 20,
  "&:disabled": {
    color: "#d6d8da",
  },
  "&.MuiRadio-colorSecondary:not(.Mui-checked)": {
    color: "#868b8c",
    "&:hover": {
      color: "#444444",
    },
  },

  "&.MuiRadio-colorSecondary.Mui-checked": {
    color: "#13426b",
    "&:hover": {
      color: "#0f3556",
    },
  },

  "&.MuiRadio-colorSecondary.Mui-error": {
    color: "#cf1318",
  },
}));

export default Radio;
