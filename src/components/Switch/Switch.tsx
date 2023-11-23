import React from "react";
import { Switch as MSwitch, styled } from "@mui/material";
import * as v from "../../styles/variables";

export const Switch = styled(MSwitch)(() => ({
  height: 24,
  width: 48,
  padding: 1,
  marginRight: 14,
  "& .MuiSwitch-track": {
    backgroundColor: v.monoColors["868b8c"],
    opacity: 1,
    borderRadius: 100,

    "&.Mui-disabled": {
      backgroundColor: `${v.monoColors.d6d8da} !important`,
    },
  },
  "& .MuiSwitch-switchBase": {
    margin: -7,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: v.primaryColors.blue,
    opacity: 1,

    "&:hover": {
      backgroundColor: v.primaryColors.blue120,
    },
    "&:disabled": {
      backgroundColor: v.monoColors.d6d8da,
    },
  },

  "& .MuiSwitch-switchBase.Mui-checked": {
    marginLeft: -4,
    color: v.monoColors.ffffff,
  },

  "&:hover.MuiSwitch-track": {
    backgroundColor: v.monoColors["444444"],
  },
}));

export default Switch;
