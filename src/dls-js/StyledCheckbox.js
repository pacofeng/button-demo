import { Checkbox, styled } from "@mui/material";

/**
 * StyledCheckbox is a share styled MUI Checkbox component that aligned to HKEX DLS - 20240108's Figma provided style
 */
export const StyledCheckbox = styled(Checkbox)((props) => ({
  paddingRight: props.size === "small" ? 6 : props.size === "large" ? 12 : 8,
  "&:hover": {
    backgroundColor: "transparent",
  },

  ".MuiSvgIcon-root": {
    fontSize: props.size === "small" ? 8 : props.size === "large" ? 16 : 12,
    color: "#868B8C",
  },

  "&.Mui-disabled": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  "&.Mui-checked:not(.Mui-disabled)": {
    ".MuiSvgIcon-root": {
      color: "#13426B",
    },
  },

  ".Mui-disabled.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },
}));
