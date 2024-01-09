import { styled } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
/**
 * StyledTextField is a share styled MUI Textfield Component that aligned to HKEX DLS - 20240108's Figma provided style
 *
 * Please ensure to pass the following props to this component
 * @props {String} Size - 'small' / 'medium' / 'large'
 * @props {boolean} hidden
 */

export const StyledTimePicker = styled((props) => (
  <TimePicker
    slotProps={{
      popper: {
        sx: {
          "& .MuiPaper-root": {
            ".MuiMultiSectionDigitalClock-root": {
              ".MuiMenuItem-root": {
                "&.Mui-selected": {
                  backgroundColor: "#13426B",
                  "&:hover": {
                    backgroundColor: "#0f3556",
                  },
                  "&:active": {
                    backgroundColor: "#0B2840",
                  },
                },
              },
            },
            ".MuiDialogActions-root": {
              ".MuiButtonBase-root": {
                "&.MuiButton-textPrimary": {
                  color: "#13426B",
                },
              },
            },
            ".MuiTouchRipple-root": {
              display: "none",
            },
          },
        },
      },
    }}
    {...props}
  />
))((props) => ({
  display: props.hidden ? "none" : "block",
  // Input label style
  "& .MuiInputLabel-root": {
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    color: props.fontColor ? props.fontColor : "#333D47",
    top: props.size === "small" ? -5 : -10,
    letterSpacing: props.size === "large" ? 0.1 : 0.25,
    lineHeight:
      props.size === "small"
        ? "14px"
        : props.size === "large"
        ? "20px"
        : "16px",
    "&.Mui-disabled, &.Mui-error": {
      color: props.fontColor ? props.fontColor : "#333D47",
    },
    "&.Mui-focused, &.MuiFormLabel-filled": {
      color: "#333D47",
      top: props.size === "large" ? 2 : 4,
      // MUI put a 0.75 scale, need to set it back
      fontSize: 10 / 0.75,
    },
  },
  // Input field style
  "& .MuiOutlinedInput-root": {
    color: "#333D47",
    fontSize: props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
    height: props.size === "small" ? 22 : props.size === "large" ? 32 : 28,
    letterSpacing: props.size === "large" ? 0.1 : 0.25,
    lineHeight:
      props.size === "small"
        ? "14px"
        : props.size === "large"
        ? "20px"
        : "16px",
    "&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#444444",
      },
    },
    "&.Mui-focused": {
      backgroundColor: "#E7ECF0",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#13426B",
        borderWidth: 1,
      },
    },
    "&.Mui-error": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#CF1F38",
      },
    },
    "&.Mui-disabled": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#D6D8DA",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#868B8C",
      legend: {
        fontSize: 10,
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: props.size === "small" ? 12 : props.size === "large" ? 22 : 16,
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
    "& .MuiButtonBase-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));
