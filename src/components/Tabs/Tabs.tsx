import React, { FC } from "react";
import { Tabs as MTabs, TabsProps as MTabsProps, styled } from "@mui/material";

export interface TabsProps extends MTabsProps {
  size?: "small" | "medium" | "large";
}

export const Tabs: FC<TabsProps> = styled(MTabs)((props: TabsProps) => ({
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

export default Tabs;
