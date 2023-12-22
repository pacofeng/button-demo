import { Select as MSelect, styled } from "@mui/material";

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const Select = styled(MSelect)((props) => ({
  "&.MuiInputBase-root": {
    boxSizing: "borderBox",
    height: props.size === "small" ? 22 : props.size === "large" ? 32 : 28,
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    color: "#333D47",
    letterSpacing: props.size === "large" ? 0.1 : 0.25,
    lineHeight:
      props.size === "small"
        ? "14px"
        : props.size === "large"
        ? "20px"
        : "16px",

    "& .MuiInputBase-input": {
      height: props.size === "small" ? 22 : props.size === "large" ? 32 : 28,
      boxSizing: "border-box",
    },

    "& .MuiSelect-select": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    "& .MuiSvgIcon-root": {
      fontSize: props.size === "small" ? 12 : props.size === "large" ? 22 : 16,
    },

    "&:hover:not(.Mui-disabled)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#444",
      },
    },

    "&:focus:not(.Mui-disabled)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
    },

    "& .Mui-disabled + .MuiOutlinedInput-notchedOutline": {
      color: "#868B8C",
      backgroundColor: "#F7F7F8",
      border: "1px solid #D6D8DA",
    },
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#444",
    // backgroundColor: "#E7ECF0",
  },

  ".MuiPaper-root .MuiList-root .Mui-selected": {
    fontSize: "10px",
  },
}));

export default Select;
