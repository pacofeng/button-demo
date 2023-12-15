import React from "react";
import { Autocomplete as MAutocomplete, styled } from "@mui/material";

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
  }
}

// AutocompletePropsSizeOverrides
export const Autocomplete = styled(MAutocomplete)((props) => ({
  display: props.hidden ? "none" : "",

  "& .MuiAutocomplete-inputRoot": {
    padding: "0 !important",
  },
}));

export default Autocomplete;
