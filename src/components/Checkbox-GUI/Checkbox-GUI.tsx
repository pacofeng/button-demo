import React from "react";
import { Checkbox as MCheckbox, styled } from "@mui/material";

export const Checkbox = styled(MCheckbox)(() => ({
  fontSize: 20,
  "&:disabled": {
    color: "#d6d8da",
  },
  "&.MuiCheckbox-colorSecondary:not(.Mui-checked)": {
    color: "#868b8c",
    "&:hover": {
      color: "#444444",
    },
  },

  "&.MuiCheckbox-colorSecondary.Mui-checked": {
    color: "#13426b",
    "&:hover": {
      color: "#0f3556",
    },
  },

  "&.MuiCheckbox-colorSecondary.Mui-error": {
    color: "#cf1318",
  },
}));

export default Checkbox;
