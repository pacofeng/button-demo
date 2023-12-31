import React from "react";
import {
  Button as MButton,
  styled,
  ButtonProps as MButtonProps,
} from "@mui/material";

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

export const Button = styled(MButton)((props: ButtonProps) => ({
  ...(props.hidden && { display: "none" }),
  width: props.fullWidth ? "100%" : props.width ? props.width : "auto",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: props.size === "small" ? 4 : props.size === "large" ? 8 : 6,
  textAlign: "center",
  fontStyle: "normal",
  textTransform: "none",
  gap: 4,
  fontWeight: 400,
  letterSpacing: 0.1,
  // Button size control
  height:
    props.variant === "tertiary"
      ? "auto"
      : props.size === "small"
      ? 22
      : props.size === "large"
      ? 32
      : 28,
  fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
  lineHeight:
    props.size === "small" ? "14px" : props.size === "large" ? "20px" : "16px",
  padding:
    props.variant === "tertiary"
      ? "0"
      : props.size === "small"
      ? "4px 8px"
      : "6px 10px",
  //Button variant control
  backgroundColor: props.defaultBackgroundColor
    ? props.defaultBackgroundColor
    : props.variant === "tertiary"
    ? "#ffffff"
    : props.variant === "secondary"
    ? "#ffffff"
    : "#13426B",
  color:
    props.variant === "tertiary"
      ? "#13426B"
      : props.variant === "secondary"
      ? "#13426B"
      : "#ffffff",
  ...(props.variant === "secondary" && {
    border: "1px solid #13426B",
  }),
  ...(props.variant === "tertiary" && {
    minWidth: "auto",
  }),
  "&:hover, &:focus-visible": {
    backgroundColor:
      props.variant === "tertiary"
        ? "transparent"
        : props.variant === "secondary"
        ? "#eeeff0"
        : "#0f3556",
    color:
      props.variant === "tertiary"
        ? "#0f3556"
        : props.variant === "secondary"
        ? "#0f3556"
        : "#ffffff",
    ...(props.variant === "tertiary" && {
      textDecoration: "underline",
      textUnderlineOffset: 2,
    }),
  },
  "&:disabled": {
    ...(props.defaultBackgroundColor && { opacity: 0.5 }),
    ...(props.variant === "secondary" && { borderColor: "#d6d8da" }),
    color:
      props.variant === "tertiary"
        ? "#d6d8da"
        : props.variant === "secondary"
        ? "#d6d8da"
        : "#ffffff",
    backgroundColor: props.defaultBackgroundColor
      ? props.defaultBackgroundColor
      : props.variant === "tertiary"
      ? "transparent"
      : props.variant === "secondary"
      ? "#ffffff"
      : "#d6d8da",
  },
  "&:active": {
    color:
      props.variant === "tertiary"
        ? "#0b2840"
        : props.variant === "secondary"
        ? "#0b2840"
        : "#ffffff",
    ...(props.variant === "tertiary" && {
      textDecoration: "underline",
      textUnderlineOffset: 2,
    }),
    backgroundColor:
      props.variant === "tertiary"
        ? "#ffffff"
        : props.variant === "secondary"
        ? "#d6d8da"
        : "#0B2840",
  },
  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    margin: 0,
    "& .MuiSvgIcon-root": {
      fontSize: props.size === "small" ? "12px" : "16px",
    },
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  disableRipple: true,
};

export default Button;
