import { Radio, styled } from "@mui/material";

/**
 * StyledRadio is a share styled MUI Radio component that aligned to HKEX DLS - 20240108's Figma provided style
 */
export const StyledRadio = styled(Radio)((props) => ({
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

  "&.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#13426B",
    },
  },

  "&.Mui-disabled.Mui-checked": {
    ".MuiSvgIcon-root": {
      color: "#D6D8DA",
    },
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },
}));
