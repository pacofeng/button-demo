import React, { forwardRef } from "react";
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

export interface ButtonProps extends MButtonProps {}

export const Button = styled(
  forwardRef(
    (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
      const { children, disableRipple = true, ...restProps } = props;
      return (
        <MButton {...restProps} ref={ref} disableRipple={disableRipple}>
          {children}
        </MButton>
      );
    }
  )
)(style);

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  disableRipple: true,
};

export default Button;
