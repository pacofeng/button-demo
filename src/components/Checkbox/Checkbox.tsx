import React from "react";
import { Checkbox as MCheckbox, styled } from "@mui/material";
import * as v from "../../styles/variables";

export const Checkbox = styled(MCheckbox)(() => ({
  fontSize: 20,
  "&:disabled": {
    color: v.monoColors.d6d8da,
  },
  "&.MuiCheckbox-colorSecondary:not(.Mui-checked)": {
    color: v.monoColors["868b8c"],
    "&:hover": {
      color: v.monoColors["444444"],
    },
  },

  "&.MuiCheckbox-colorSecondary.Mui-checked": {
    color: v.primaryColors.blue,
    "&:hover": {
      color: v.primaryColors.blue120,
    },
  },

  "&.MuiCheckbox-colorSecondary.Mui-error": {
    color: v.primaryColors.red110,
  },
}));

export default Checkbox;
