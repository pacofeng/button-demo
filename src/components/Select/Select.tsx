import {
  Select as MSelect,
  SelectProps as MSelectProps,
  styled,
} from "@mui/material";

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const Select = styled((SelectProps: MSelectProps) => (
  <MSelect
    {...SelectProps}
    MenuProps={{
      sx: {
        "& .MuiPaper-root .MuiMenu-list .MuiMenuItem-root": {
          fontSize:
            SelectProps.size === "small"
              ? 10
              : SelectProps.size === "large"
              ? 14
              : 12,
          letterSpacing: SelectProps.size === "large" ? 0.1 : 0.25,
          lineHeight:
            SelectProps.size === "small"
              ? "14px"
              : SelectProps.size === "large"
              ? "20px"
              : "16px",
          padding: "6px 16px",
          color: "#333D47",

          "&:hover": {
            backgroundColor: "#E7ECF0",
          },

          "&.Mui-disabled": {
            opacity: 1,
            color: "#D6D8DA",
          },

          "& .MuiTouchRipple-root": {
            display: "none",
          },
        },
      },
    }}
  />
))((props) => ({
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
      zIndex: 1000,
    },

    "&:hover:not(.Mui-disabled)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#444",
      },
    },

    "& .Mui-disabled + .MuiOutlinedInput-notchedOutline": {
      color: "#868B8C",
      backgroundColor: "#F7F7F8",
      border: "1px solid #D6D8DA",
    },

    "& .MuiSelect-select.Mui-disabled": {
      color: "#333D47",
      zIndex: 100,
      "-webkit-text-fill-color": "initial",
    },
  },

  "&.Mui-focused ": {
    backgroundColor: "#E7ECF0",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#444",
    },
  },

  ".MuiPaper-root .MuiList-root .Mui-selected": {
    fontSize: "10px",
  },
}));

export default Select;
