import React from "react";
import { Radio as MRadio, styled } from "@mui/material";
import * as v from "../../styles/variables";

export const Radio = styled(MRadio)(() => ({
  fontSize: 20,
  "&:disabled": {
    color: v.monoColors.d6d8da,
  },
  "&.MuiRadio-colorSecondary:not(.Mui-checked)": {
    color: v.monoColors["868b8c"],
    "&:hover": {
      color: v.monoColors["444444"],
    },
  },

  "&.MuiRadio-colorSecondary.Mui-checked": {
    color: v.primaryColors.blue,
    "&:hover": {
      color: v.primaryColors.blue120,
    },
  },

  "&.MuiRadio-colorSecondary.Mui-error": {
    color: v.primaryColors.red110,
  },
}));

export default Radio;
