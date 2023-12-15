import React from "react";
import {
  TextField as MTextField,
  styled,
  TextFieldProps as MTextFieldProps,
} from "@mui/material";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export interface TextFieldProps {
  fontColor?: string;
  backgroundColor?: string;
}

export type MergedTextFieldProps = MTextFieldProps & TextFieldProps;

export const TextField = styled(MTextField)((props: MergedTextFieldProps) => ({
  display: props.hidden ? "none" : "block",
  padding: 0,
  gap: 8,
  // Input label style
  "& .MuiInputLabel-root": {
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    top: props.size === "small" ? 0 : props.size === "large" ? -4 : -8,
    color: props.fontColor ? props.fontColor : "#5b636b",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#333d47",
  },
  "& .MuiInputLabel-shrink": {
    top: "0 !important",
  },
  "& .MuiInputBase-root": {
    padding: props.size === "large" ? "12px 16px" : "6px 16px",
  },
  "& .MuiInputBase-root.Mui-focused": {
    backgroundColor: "#e8eef3",
  },

  // Input field style
  "& .MuiOutlinedInput-input": {
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    height: props.size === "small" ? 20 : props.size === "large" ? 24 : 24,
    padding: 0,
  },

  "& .MuiSelect-select": {
    height: props.size === "small" ? "20px !important" : "24px !important",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: props.backgroundColor ? props.backgroundColor : "#ffffff",
    "& .MuiAutocomplete-input": {
      padding:
        props.size === "large" ? "12px 16px !important" : "6px 16px !important",
    },
    "&fieldset": {
      borderColor: "#868b8c",
      color: "#5b636b",
    },
    "&:hoverfieldset": {
      borderColor: "#444444",
      color: "#5b636b",
    },
    "&.Mui-focusedfieldset": {
      borderColor: "#13426b",
      color: "#333d47",
    },
    "&.Mui-errorfieldset": {
      borderColor: "#cf1f38",
    },
    "&.Mui-disabledfieldset": {
      borderColor: "#868b8c",
    },
  },
  // Style for disabledtextfield
  "& .Mui-disabled": {
    backgroundColor: "#f7f7f8",
    color: "#5b636b",
  },

  // Overwrite Autocomplete padding
  '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"].MuiAutocomplete-input':
    {
      padding: 0,
    },

  // Input Spinner Style
  "&input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
    {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
    },
}));

export default TextField;
