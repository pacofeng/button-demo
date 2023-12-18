import React from "react";
import {
  Radio as MRadio,
  styled,
  RadioProps as MRadioProps,
} from "@mui/material";

declare module "@mui/material/Radio" {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}

export const Radio = styled(MRadio)((props: MRadioProps) => ({
  // "&.MuiRadio-colorSecondary.Mui-error": {
  //   color: "#cf1318",
  // },

  padding: 0,
  marginRight: props.size === "small" ? 6 : props.size === "large" ? 12 : 8,
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

  "&.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#13426B",
    },
  },

  "&.Mui-disabled.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },
}));

export default Radio;
