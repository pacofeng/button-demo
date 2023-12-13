import { Switch as MSwitch, styled } from "@mui/material";

export const Switch = styled(MSwitch)(() => ({
  height: 24,
  width: 48,
  padding: 1,
  marginRight: 14,
  "& .MuiSwitch-track": {
    backgroundColor: "#868b8c",
    opacity: 1,
    borderRadius: 100,

    "&.Mui-disabled": {
      backgroundColor: "#d6d8da !important",
    },
  },
  "& .MuiSwitch-switchBase": {
    margin: -7,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#13426B",
    opacity: 1,

    "&:hover": {
      backgroundColor: "#0f3556",
    },
    "&:disabled": {
      backgroundColor: "#d6d8da",
    },
  },

  "& .MuiSwitch-switchBase.Mui-checked": {
    marginLeft: -4,
    color: "#ffffff",
  },

  "&:hover.MuiSwitch-track": {
    backgroundColor: "#444444",
  },
}));

export default Switch;
