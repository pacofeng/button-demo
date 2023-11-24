import * as CSS from "csstype";
import { ButtonProps } from "./Button";
import * as v from "../../styles/variables";

const defaultRectSizeStyle = {
  small: {
    height: "32px",
    minWidth: "64px",
    padding: "6px 10px",
  },
  medium: {
    height: "36px",
    minWidth: "80px",
    padding: "6px 12px",
  },
  large: {
    height: "48px",
    minWidth: "96px",
    padding: "12px 16px",
  },
};

const defaultFontSizeStyle = {
  small: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  medium: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  large: {
    fontSize: "16px",
    lineHeight: "24px",
  },
};

const defaultVariantStyle = {
  primary: {
    backgroundColor: v.primaryColors.blue,
    color: v.monoColors.ffffff,
    border: "none",
  },
  secondary: {
    backgroundColor: v.monoColors.ffffff,
    color: v.primaryColors.blue,
    border: `1px solid ${v.primaryColors.blue}`,
  },
  tertiary: {
    background: "none",
    color: v.primaryColors.blue,
    border: "none",
    textUnderlineOffset: "4px",
  },
};

const hoverVariantStyle = {
  primary: {
    backgroundColor: v.primaryColors.blue120,
  },
  secondary: {
    backgroundColor: v.monoColors.eeeff0,
    borderColor: v.primaryColors.blue120,
  },
  tertiary: {
    background: "none",
    color: v.primaryColors.blue120,
    textDecoration: "underline",
  },
};

const activeVariantStyle = {
  primary: {
    backgroundColor: v.primaryColors.blue140,
  },
  secondary: {
    backgroundColor: v.monoColors.d6d8da,
    borderColor: v.primaryColors.blue140,
  },
  tertiary: {
    color: v.primaryColors.blue140,
    textDecoration: "underline",
  },
};

const disabledVariantStyle = {
  primary: {
    backgroundColor: v.monoColors.d6d8da,
    color: v.monoColors.ffffff,
  },
  secondary: {
    backgroundColor: v.monoColors.ffffff,
    color: v.monoColors.d6d8da,
    borderColor: v.monoColors.d6d8da,
  },
  tertiary: {
    color: v.monoColors.d6d8da,
    textDecoration: "none",
  },
};

const style = ({
  size = "medium",
  variant = "primary",
}: // fullWidth,
// width,
// defaultBackgroundColor,
ButtonProps) => {
  const attributes: CSS.Properties = {
    textTransform: "initial",
  };
  return {
    ...attributes,
    fontWeight: 400,
    borderRadius: v.border.radius,
    letterSpacing: "0.1px",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    // width: fullWidth ? "100%" : width ? width : "auto",
    ...defaultFontSizeStyle[size],
    ...(variant === "tertiary" ? { padding: 0 } : defaultRectSizeStyle[size]),
    ...defaultVariantStyle[variant],
    // ...(defaultBackgroundColor && { backgroundColor: defaultBackgroundColor }),
    "&:focus, &:focus-visible": {
      outline: "none",
    },
    "&.disabled, &[disabled]": {
      cursor: "not-allowed",
      boxShadow: "none",
    },
    "&:hover": {
      ...hoverVariantStyle[variant],
    },
    "&:active": {
      ...activeVariantStyle[variant],
    },
    "&[disabled]": {
      ...disabledVariantStyle[variant],
      // ...(defaultBackgroundColor && {
      //   backgroundColor: defaultBackgroundColor,
      // }),
    },
  };
};

export default style;
