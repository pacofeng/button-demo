import React from "react";
import { Tab as MTab, styled, TabProps as MTabProps } from "@mui/material";

export interface TabProps extends MTabProps {
  width?: number | string;
}

export const Tab = styled(MTab)((props: TabProps) => ({
  // TODO: remove
  fontFamily: "'FS Elliot Pro', Arial",
  width: props.width || "auto",
  minHeight: "auto",
  letterSpacing: 0.1,
  paddingLeft: 16,
  paddingRight: 16,
  color: "#333D47",
  textTransform: "initial",
  borderBottom: "1px solid #D6D8DA",
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

export default Tab;
