import React from "react";
import {
  Checkbox as MCheckbox,
  styled,
  CheckboxProps as MCheckboxProps,
} from "@mui/material";

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}

export const Checkbox = styled(MCheckbox)((props: MCheckboxProps) => ({
  // "&.MuiCheckbox-colorSecondary.Mui-error": {
  //   color: "#cf1318",
  // },

  paddingRight: props.size === "small" ? 6 : props.size === "large" ? 12 : 8,
  "&:hover": {
    backgroundColor: "transparent",
  },

  ".MuiSvgIcon-root": {
    fontSize: props.size === "small" ? 8 : props.size === "large" ? 16 : 12,
    color: "#868B8C",
  },

  "&.Mui-disabled": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  "&.Mui-checked:not(.Mui-disabled)": {
    ".MuiSvgIcon-root": {
      color: "#13426B",
    },
  },

  ".Mui-disabled.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },
}));

export default Checkbox;
