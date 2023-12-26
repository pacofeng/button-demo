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
  display: props.hidden ? "none" : "flex",
  width: props.fullWidth ? "100%" : props.width ? props.width : "auto",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  textAlign: "center",
  fontStyle: "normal",
  textTransform: "none",
  gap: 4,
  fontWeight: 400,
  letterSpacing: 0.1,
  // Button size control
  height: props.size === "small" ? 32 : props.size === "large" ? 48 : 36,
  fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
  lineHeight:
    props.size === "medium" ? "24px" : props.size === "large" ? "24px" : "20px",
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: props.size === "large" ? 12 : 10,
  paddingRight: props.size === "large" ? 12 : 10,

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
      ? "#13426B "
      : props.variant === "secondary"
      ? "#13426B"
      : "#ffffff",
  border: props.variant === "secondary" ? "1px solid #13426B" : 0,
  textDecoration: "none",

  "&:hover": {
    backgroundColor:
      props.variant === "tertiary"
        ? "#eeeff0"
        : props.variant === "secondary"
        ? "#eeeff0"
        : "#0f3556",
    color:
      props.variant === "tertiary"
        ? "#0f3556 "
        : props.variant === "secondary"
        ? "#0f3556"
        : "#ffffff",
    border: props.variant === "secondary" ? "1px solid #0f3556" : 0,
    textDecoration: props.variant === "tertiary" ? "underline" : "none",
  },
  "&:disabled": {
    opacity:
      props.variant === "tertiary" || props.variant === "secondary" ? 0.5 : 0.5,
    color:
      props.variant === "tertiary"
        ? "#426889 "
        : props.variant === "secondary"
        ? "#426889"
        : "#ffffff",
    backgroundColor: props.defaultBackgroundColor
      ? props.defaultBackgroundColor
      : props.variant === "tertiary"
      ? "#ffffff"
      : props.variant === "secondary"
      ? "#ffffff"
      : "rgba(66, 104, 137, 0.5)",
    border: props.variant === "secondary" ? "1px solid #426889" : 0,
  },
  "&:focus": {
    color:
      props.variant === "tertiary"
        ? "#0b2840 "
        : props.variant === "secondary"
        ? "#0b2840"
        : "#ffffff",
    textDecoration: props.variant === "tertiary" ? "underline" : "none",
    backgroundColor:
      props.variant === "tertiary"
        ? "#ffffff"
        : props.variant === "secondary"
        ? "#d6d8da"
        : "#0B2840",
  },
}));

Button.defaultProps = {
  size: "medium",
  variant: "primary",
};

export default Button;
