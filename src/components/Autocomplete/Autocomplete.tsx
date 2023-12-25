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
          "& .Mui-focused": {
            backgroundColor: "#E7ECF0",
          },
          "& .MuiAutocomplete-option": {
            "&[aria-selected='true']": {
              backgroundColor: "#F7F7F8",
              "&.Mui-focused": {
                backgroundColor: "#E7ECF0",
              },
            },
            "&.Mui-focused": {
              backgroundColor: "#E7ECF0",
            },
            "&[aria-disabled='true']": {
              color: "#D6D8DA",
              opacity: 1,
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
          props.size === "small" ? 24 : props.size === "large" ? 34 : 27,
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
