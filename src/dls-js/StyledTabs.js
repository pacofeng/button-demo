import { Tabs, styled } from "@mui/material";

/**
 * StyledTabs is a share styled MUI Select component for Tabs that aligned to HKEX DLS - 20240108's Figma provided style
 */
export const StyledTabs = styled(Tabs)((props) => ({
  minHeight: "auto",
  ".MuiTabs-indicator": {
    backgroundColor: "#13426B",
    height: 3,
  },
  ".MuiTab-root": {
    ...(props.size === "small" && {
      fontSize: 10,
      height: 28,
      lineHeight: "14px",
      ".MuiSvgIcon-root": {
        fontSize: 12,
      },
    }),
    ...((props.size === "medium" || !props.size) && {
      fontSize: 12,
      height: 32,
      lineHeight: "16px",
      ".MuiSvgIcon-root": {
        fontSize: 16,
      },
    }),
    ...(props.size === "large" && {
      fontSize: 14,
      height: 36,
      lineHeight: "20px",
      ".MuiSvgIcon-root": {
        fontSize: 16,
      },
    }),
  },
}));
