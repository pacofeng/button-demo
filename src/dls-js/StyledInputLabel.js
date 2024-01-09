import { InputLabel, styled } from "@mui/material";

/**
 * StyledDropDownInputLabel is a share styled MUI InputLabel component for Dropdown that aligned to HKEX DLS - 20240108's Figma provided style
 *
 * Please ensure to pass the following props to this component
 * @props {String} Size - 'small' / 'medium' / 'large'
 */
export const StyledDropDownInputLabel = styled(InputLabel)((props) => ({
  color: "#333D47",
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
    left: 0,
    right: 0,
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

  "&.MuiInputLabel-shrink + .Mui-focused > .MuiOutlinedInput-notchedOutline legend":
    {
      fontSize: "8px",
    },
}));
