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
    height:
      props.size === "small"
        ? "20px !important"
        : props.size === "large"
        ? "32px !important"
        : "28px !important",
    padding:
      props.size === "small"
        ? "12px 8px"
        : props.size === "large"
        ? "12px 16px"
        : "12px 10px",

    "&.Mui-focused": {
      backgroundColor: "#e8eef3",
    },
  },

  "& .MuiSelect-root.Mui-forced": {
    backgroundColor: "#e8eef3",
  },

  gap: 8,
  backgroundColor: "#ffffff",
}));

export default Select;
