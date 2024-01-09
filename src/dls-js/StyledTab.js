import { Tab, styled } from "@mui/material";

/**
 * StyledTab is a share styled MUI Select component for Tab that aligned to HKEX DLS - 20240108's Figma provided style
 * Please ensure to pass the following props to this component
 * @props {String} Size - 'small' / 'medium' / 'large'
 */
export const StyledTab = styled(Tab)((props) => ({
  width: props.width || "auto",
  minHeight: "auto",
  letterSpacing: 0.1,
  paddingLeft: 16,
  paddingRight: 16,
  color: "#333D47",
  textTransform: "initial",
  borderBottom: "1px solid #D6D8DA",
  borderTop: "1px solid transparent",
  "&:hover:not(.Mui-disabled)": {
    backgroundColor: "#F7F7F8",
  },
  "&.Mui-selected:not(.Mui-disabled)": {
    color: "#333D47",
  },
  "&.Mui-disabled": {
    color: "#868B8C",
  },
  ".MuiTouchRipple-root": {
    display: "none",
  },
}));
