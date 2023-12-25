import { Select as MSelect, styled } from "@mui/material";

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const Select = styled(MSelect)((props) => ({
  "& .MuiSelect-select": {
    height: props.size === "small" ? "20px !important" : "24px !important",
    padding: props.size === "large" ? "12px 16px" : "6px 16px",

    "&.Mui-focused": {
      backgroundColor: "#e8eef3",
    },
  },

  "& .MuiSelect-root.Mui-forced": {
    backgroundColor: "#e8eef3",
  },

  gap: 8,
  backgroundColor: "#ffffff",
}));

export default Select;
