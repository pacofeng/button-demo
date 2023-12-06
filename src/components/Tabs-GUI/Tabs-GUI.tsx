import React from "react";
import { Tabs as MTabs, styled } from "@mui/material";
import * as v from "../../styles/variables";

export const Tabs = styled(MTabs)(() => ({
  borderBottom: 1,
  borderColor: "divider",

  "& .MuiTabs-indicator": {
    backgroundColor: "#333D47",
    color: "#333D47",
    height: "3px",

    // TODO: update disabled and selected style for tabs
    "&.Mui-disabled": {
      display: "none",
    },
  },
}));

export default Tabs;
