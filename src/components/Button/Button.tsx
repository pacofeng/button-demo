import React from "react";
import {
  Button as MButton,
  styled,
  ButtonProps as MButtonProps,
} from "@mui/material";
import style from "./style";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    contained: false;
    outlined: false;
    text: false;
  }
}

export interface ButtonProps extends MButtonProps {
  width?: number;
  defaultBackgroundColor?: string;
}

export const Button = styled(MButton)(style);

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  disableRipple: true,
};

export default Button;
