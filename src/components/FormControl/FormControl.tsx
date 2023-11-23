import React from "react";
import { FormControl as MFormControl, styled } from "@mui/material";
import * as v from "../../styles/variables";

export const FormControl = styled(MFormControl)((props) => ({
  display: props.hidden === true ? "none" : "",

  "& .MuiOutlinedInput-root": {
    "&fieldset": {
      borderColor: v.monoColors["868b8c"],
      color: v.primaryColors.charcoal80,
    },
    "&:hoverfieldset": {
      borderColor: v.monoColors["444444"],
    },
    "&.Mui-focusedfieldset": {
      borderColor: v.primaryColors.blue,
      color: v.primaryColors.charcoal,
    },
    "&.Mui-errorfieldset": {
      borderColor: v.primaryColors.red110,
    },
    "&.Mui-disabledfieldset": {
      borderColor: v.monoColors["868b8c"],
      backgroundColor: v.monoColors.f7f7f8,
    },
  },
}));

export default FormControl;
