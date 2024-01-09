import { Tooltip, tooltipClasses, styled } from "@mui/material";
import React from "react";
/**
 * StyledCheckbox is a share styled MUI Checkbox component that aligned to HKEX DLS - 20240108's Figma provided style
 */
export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ size }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FFFFFF",
    color: "#333D47",
    boxShadow:
      "0px 7px 10px 0px rgba(0, 0, 0, 0.04), 0px 1px 8px 0px rgba(0, 0, 0, 0.06)",
    fontSize: size === "small" ? 10 : size === "large" ? 14 : 12,
    lineHeight: size === "small" ? "14px" : size === "large" ? "20px" : "16px",
    letterSpacing: size === "large" ? 0.1 : 0.25,
    padding: "8px 12px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#FFFFFF",
  },
}));
