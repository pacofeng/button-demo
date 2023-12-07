import React from "react";
import {
  Tooltip as MTooltip,
  tooltipClasses,
  styled,
  TooltipProps as MTooltipProps,
} from "@mui/material";

export interface TooltipProps extends MTooltipProps {
  size?: "small" | "medium" | "large";
}

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MTooltip {...props} classes={{ popper: className }} />
))(({ size }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: "#333D47",
    boxShadow: "0px 7px 10px 0px rgba(0, 0, 0, 0.06)",
    fontSize: size === "small" ? 10 : size === "large" ? 14 : 12,
    // padding: "8px 12px"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgba(255, 255, 255, 1)",
  },
}));

export default Tooltip;
