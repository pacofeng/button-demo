import React from "react";
import { Tabs as MTabs, styled } from "@mui/material";

export const Tabs = styled(MTabs)(() => ({
  ".MuiTabs-indicator": {
    backgroundColor: "#13426B",
    height: 3,
  },
}));

export default Tabs;
