import React from "react";
import { Select as MSelect, styled } from "@mui/material";
import * as v from "../../styles/variables";

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const Select = styled(MSelect)((props) => ({
  "& .MuiSelect-select": {
    height: props.size === "small" ? "20px !important" : "24px !important",
    padding: props.size === "large" ? "12px 16px" : "6px 16px",

    "&.Mui-focused": {
      backgroundColor: v.primaryColors.pebble50,
    },
  },

  "& .MuiSelect-root.Mui-forced": {
    backgroundColor: v.primaryColors.pebble50,
  },

  gap: 8,
  backgroundColor: v.monoColors.ffffff,
}));

export default Select;
