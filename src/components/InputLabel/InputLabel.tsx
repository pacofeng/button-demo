import { InputLabel as MInputLabel, styled } from "@mui/material";

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const InputLabel = styled(MInputLabel)((props) => ({
  ...(props.size === "small"
    ? { fontSize: "10px", lineHeight: "14px", letterSpacing: "0.25px" }
    : props.size === "medium"
    ? {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.25px",
      }
    : { fontsize: "14px", lineHeight: "20px", letterSpacing: "0.1px" }),

  "&.MuiInputLabel-shrink": {
    color: "#333D47",
    fontSize: "10px",
    letterSpacing: props.size === "large" ? 0.1 : 0.25,
    top:
      props.size === "small" ? "5px" : props.size === "medium" ? "4px" : "2px",
    left: props.size === "small" ? 1 : props.size === "medium" ? 2 : 3,
  },

  "&.MuiInputLabel-shrink + .Mui-focused > .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #13426B",
    // backgroundColor: "#E7ECF0",
  },

  "&:not(.MuiInputLabel-shrink)": {
    top:
      props.size === "small"
        ? "-4px"
        : props.size === "medium"
        ? "-9px"
        : "-10px",
  },

  "&.Mui-disabled": {
    color: "#868B8C",
  },
}));

export default InputLabel;
