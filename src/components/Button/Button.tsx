import React, { forwardRef } from "react";
import isPropValid from "@emotion/is-prop-valid";
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

export interface ButtonProps {
  width?: number;
  defaultBackgroundColor?: string;
}

export type MergedProps = ButtonProps & MButtonProps;

export const Button = styled(
  forwardRef(
    (props: MergedProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
      const { children, disableRipple = true, ...restProps } = props;
      return (
        <MButton {...restProps} ref={ref} disableRipple={disableRipple}>
          {children}
        </MButton>
      );
    }
  ),
  {
    shouldForwardProp: isPropValid,
  }
)(style);

export default Button;
