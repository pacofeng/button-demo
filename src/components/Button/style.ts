import * as CSS from "csstype";
import { ButtonProps } from "./Button";

const style = (props: ButtonProps) => {
  return {
    display: props.hidden ? "none" : "inline-flex",
    width: props.fullWidth ? "100%" : props.width ? props.width : "auto",
    minWidth: props.fullWidth
      ? "100%"
      : props.width
      ? props.width
      : props.variant === "tertiary"
      ? "auto"
      : props.size === "small"
      ? 64
      : props.size === "large"
      ? 96
      : 80,
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
    height:
      props.variant === "tertiary"
        ? "auto"
        : props.size === "small"
        ? 32
        : props.size === "large"
        ? 48
        : 36,
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    lineHeight: props.size === "small" ? "20px" : "24px",
    padding:
      props.variant === "tertiary"
        ? "0"
        : props.size === "large"
        ? "12px 16px"
        : props.size === "small"
        ? "6px 10px"
        : "6px 12px",

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
    ".MuiButton-startIcon, .MuiButton-endIcon": {
      margin: 0,
    },
    ".MuiTouchRipple-root": {
      display: "none",
    },
  };
};

export default style;
