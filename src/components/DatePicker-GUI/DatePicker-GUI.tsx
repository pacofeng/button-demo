import React from "react";
import { styled } from "@mui/material";
import {
  DatePicker as MDatePicker,
  DatePickerProps as MDatePickerProps,
} from "@mui/x-date-pickers";

export interface DatePickerProps extends MDatePickerProps<Date> {
  hidden?: boolean;
  fontColor?: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
}

export const DatePicker = styled(MDatePicker)((props: DatePickerProps) => ({
  display: props.hidden ? "none" : "block",
  padding: 0,
  gap: 8,

  // Input label style
  "& .MuiInputLabel-root": {
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    top: props.size === "large" ? -4 : -8,
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
    width: "100%",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "#ffffff",
    "& .MuiAutocomplete-input": {
      padding:
        props.size === "large" ? "12px 16px !important" : "6px 16px !important",
    },
    "& fieldset": {
      borderColor: "#868b8c",
      color: "#5b636b",
    },
    "&:hover fieldset": {
      borderColor: "#444444",
      color: "#5b636b",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#13426b",
      color: "#333d47",
    },
    "&.Mui-error fieldset": {
      borderColor: "#cf1f38",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#868b8c",
    },
  },
  // Style for disabled textfield
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
  "& input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
    {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
    },
}));

export default DatePicker;
