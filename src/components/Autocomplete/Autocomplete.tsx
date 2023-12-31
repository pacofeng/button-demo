import React from "react";
import {
  Autocomplete as MAutocomplete,
  styled,
  AutocompleteProps as MAutocompleteProps,
  Popper,
} from "@mui/material";

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

// AutocompletePropsSizeOverrides
export const Autocomplete = styled(
  (props: MAutocompleteProps<any, any, any, any>) => (
    <MAutocomplete
      PopperComponent={styled(Popper)(() => ({
        "& .MuiAutocomplete-paper": {
          fontSize:
            props.size === "small" ? 10 : props.size === "large" ? 14 : 12,
          letterSpacing: props.size === "large" ? 0.1 : 0.25,
          lineHeight:
            props.size === "small"
              ? "14px"
              : props.size === "large"
              ? "20px"
              : "16px",
          "& .MuiAutocomplete-option": {
            "&[aria-selected='true']": {
              backgroundColor: "#F7F7F8",
            },
            "&[aria-disabled='true']": {
              color: "#D6D8DA",
              opacity: 1,
            },
            // use hover instead of Mui-focused to update default bg color when dropdown opens
            "&.Mui-focused": {
              backgroundColor: "transparent",
              "&[aria-selected='true']": {
                backgroundColor: "#F7F7F8",
              },
            },
            "&:hover": {
              backgroundColor: "#E7ECF0",
              "&[aria-selected='true']": {
                backgroundColor: "#E7ECF0",
              },
            },
          },
        },
      }))}
      {...props}
    />
  )
)((props) => ({
  "&.MuiAutocomplete-root": {
    display: props.hidden ? "none" : "",
    "&.MuiAutocomplete-hasPopupIcon": {
      "& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
        paddingRight:
          props.size === "small" ? 24 : props.size === "large" ? 34 : 28,
      },
      "&.MuiAutocomplete-hasClearIcon": {
        "& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
          paddingRight:
            props.size === "small" ? 48 : props.size === "large" ? 66 : 54,
        },
      },
    },
    "& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
      padding: "0 16px",
      "& .MuiAutocomplete-input": {
        padding: 0,
      },
    },
    "& .MuiAutocomplete-endAdornment": {
      right: 16,
      display: "inline-flex",
      gap: 8,
      top: "50%",
      transform: "translateY(-50%)",
      "& .MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
          fontSize:
            props.size === "small" ? 12 : props.size === "large" ? 22 : 16,
        },
        "& .MuiTouchRipple-root": {
          display: "none",
        },
      },
    },
  },
}));

export default Autocomplete;
