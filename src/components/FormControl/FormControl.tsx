import React from "react";
import { FormControl as MFormControl, styled } from "@mui/material";

export const FormControl = styled(MFormControl)((props) => ({
  display: props.hidden === true ? "none" : "",

  "& .MuiOutlinedInput-root": {
    "&fieldset": {
      borderColor: "#868b8c",
      color: "#5b636b",
    },
    "&:hover fieldset": {
      borderColor: "#444444",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#13426b",
      color: "#333d47",
    },
    "&.Mui-error fieldset": {
      borderColor: "#cf1f38",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#868b8c",
      backgroundColor: "#f7f7f8",
    },
  },
}));

export default FormControl;
