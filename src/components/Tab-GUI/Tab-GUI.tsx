import React from "react";
import { Tab as MTab, styled, TabProps as MTabProps } from "@mui/material";

export interface TabProps extends MTabProps {
  width?: number | string;
}

export const Tab = styled(MTab)((props: TabProps) => ({
  display: "block",
  width: props.width || "auto",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "56px",
  // fontSize: props.size === 'small' ? 10 : props.size === 'large' ? 14 : 12,
  padding: "16px",
  color: "#333D47",
  fontWeight: 400,
  fontSize: "16px",
  textTransform: "none",
  letterSpacing: "0.1px",
  lineHeight: "24px",

  "&:hover": {
    backgroundColor: "#F7F7F8",
  },

  "&.Mui-selected": {
    color: "#333D47",
    "&.Mui-disabled": {
      color: "#868B8C",
      // borderBottom: "3px solid #868B8C",
    },
  },
}));

export default Tab;
