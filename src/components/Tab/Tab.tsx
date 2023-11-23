import React from "react";
import { Tab as MTab, styled, TabProps as MTabProps } from "@mui/material";
import * as v from "../../styles/variables";

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
  padding: "16px",
  color: v.primaryColors.charcoal,
  fontWeight: 400,
  fontSize: "16px",
  textTransform: "none",
  letterSpacing: "0.1px",
  lineHeight: "24px",

  "&:hover": {
    backgroundColor: v.monoColors.f7f7f8,
  },

  "&.Mui-selected": {
    color: v.primaryColors.charcoal,
    "&.Mui-disabled": {
      color: v.monoColors["868b8c"],
    },
  },
}));

export default Tab;
