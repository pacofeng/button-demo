import React from "react";
import { Checkbox as MCheckbox, styled } from "@mui/material";

export const Checkbox = styled(MCheckbox)(() => ({
  // "&.MuiCheckbox-colorSecondary.Mui-error": {
  //   color: "#cf1318",
  // },

  padding: 0,
  marginRight: 12,
  "&:hover": {
    backgroundColor: "transparent",
  },

  "& .MuiSvgIcon-root": {
    color: "#868B8C",
    fontSize: 20,
  },

  "& .Mui-disabled": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  "& .Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#13426B",
    },
  },

  "& .Mui-disabled.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

export default Checkbox;
