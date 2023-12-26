import { Switch as MSwitch, styled } from "@mui/material";

declare module "@mui/material/Switch" {
  interface SwitchPropsSizeOverrides {
    large: true;
  }
}

export const Switch = styled(MSwitch)(({ size }) => ({
  height: size === "small" ? 12 : size === "large" ? 20 : 16,
  width: size === "small" ? 24 : size === "large" ? 40 : 32,
  padding: 0,
  marginRight: size === "small" ? 6 : size === "large" ? 12 : 8,

  "& .MuiSwitch-thumb": {
    height: size === "small" ? 8 : size === "large" ? 16 : 12,
    width: size === "small" ? 8 : size === "large" ? 16 : 12,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.03)",
  },

  "& .Mui-checked .MuiSwitch-thumb": {
    marginLeft: size === "small" ? -3 : size === "large" ? -4 : -8,
  },

  "& .MuiSwitch-track": {
    backgroundColor: "#868b8c",
    opacity: 1,
    borderRadius: 100,

    "&.Mui-disabled": {
      opacity: 1,
      backgroundColor: "#d6d8da !important",
    },
  },

  "& .MuiSwitch-switchBase": {
    margin: size === "small" ? -2 : -7,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#13426B",
    opacity: 1,

    "&:hover": {
      backgroundColor: "#0f3556",
    },
    "&:disabled": {
      backgroundColor: "#d6d8da !important",
    },
  },

  "& .MuiSwitch-switchBase+.MuiSwitch-track": {
    opacity: 1,

    "&:hover": {
      backgroundColor: "#444 !important",
    },
  },

  "&  .MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track": {
    opacity: 1,

    backgroundColor: "#d6d8da !important",
  },

  "&  .MuiSwitch-switchBase.Mui-checked.Mui-disabled+.MuiSwitch-track": {
    opacity: 1,

    backgroundColor: "#d6d8da !important",
  },

  "& .MuiSwitch-switchBase.Mui-checked": {
    marginLeft: -3,
    color: "#ffffff !important",
  },

  "&:hover .MuiSwitch-track": {
    backgroundColor: "#444444",
  },
  "&:hover .Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#0F3556",
  },
  ".MuiTouchRipple-root": {
    display: "none",
  },
}));

export default Switch;
