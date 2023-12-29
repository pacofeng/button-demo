import React, { FC } from "react";
import {
  FormControlLabel as MFormControlLabel,
  styled,
  FormControlLabelProps as MFormControlLabelProps,
} from "@mui/material";

export interface FormControlLabelProps extends MFormControlLabelProps {
  size?: "small" | "medium" | "large";
}

export const FormControlLabel: FC<FormControlLabelProps> = styled(
  MFormControlLabel
)((props: FormControlLabelProps) => ({
  color: "#333D47",
  ".MuiFormControlLabel-label.Mui-disabled": {
    color: "#333D47",
  },
  // checkbox, radio and switch
  ".MuiCheckbox-root, .MuiRadio-root, .MuiSwitch-root": {
    "+ .MuiFormControlLabel-label": {
      fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
      lineHeight:
        props.size === "small"
          ? "14px"
          : props.size === "large"
          ? "20px"
          : "16px",
      letterSpacing: props.size === "large" ? 0.1 : 0.25,
    },
  },
  ".MuiSwitch-root": {
    "+ .MuiFormControlLabel-label.Mui-disabled": {
      color: "#5B636B",
    },
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
    "& .MuiSwitch-root:not(.Mui-disabled)": {
      "& .MuiSwitch-track": {
        backgroundColor: "#444",
      },

      "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        backgroundColor: "#0f3556",
      },
    },
  },
}));

export default FormControlLabel;
