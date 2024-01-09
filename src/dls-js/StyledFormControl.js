import { FormControl, styled } from "@mui/material";

/**
 * StyledFormControl is a share styled MUI FormControl component that aligned to HKEX DLS - 20240108's Figma provided style
 * Please ensure to pass the following props to this component
 * @props {boolean} hidden
 */
export const StyledFormControl = styled(FormControl)((props) => ({
  display: props.hidden === true ? "none" : "",
  width: "100%",
  "& .MuiOutlinedInput-root": {
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
      backgroundColor: "#F7F7F8",
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
  },
}));
