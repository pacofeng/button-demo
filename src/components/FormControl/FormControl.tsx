import React from "react";
import { FormControl as MFormControl, styled } from "@mui/material";

export const FormControl = styled(MFormControl)((props) => ({
  display: props.hidden === true ? "none" : "",

  "& .MuiOutlinedInput-root": {
    "&fieldset": {
      borderColor: "#868b8c",
      color: "#5b636b",
    },
    "&:hoverfieldset": {
      borderColor: "#444444",
    },
    "&.Mui-focusedfieldset": {
      borderColor: "#13426b",
      color: "#333d47",
    },
    "&.Mui-errorfieldset": {
      borderColor: "#cf1f38",
    },
    "&.Mui-disabledfieldset": {
      borderColor: "#868b8c",
      backgroundColor: "#f7f7f8",
    },
  },
}));

export default FormControl;
