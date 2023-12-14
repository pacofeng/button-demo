import {
  InputLabel as MInputLabel,
  styled,
  InputLabelProps,
} from "@mui/material";

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

export const InputLabel = styled(MInputLabel)(
  (props: InputLabelProps & { size?: "small" | "medium" | "large" }) => ({
    color: "#333D47",
    top:
      props.size === "small" ? "12px" : props.size === "medium" ? "4px" : "0",
    ...(props.size === "small"
      ? { fontSize: "10px", lineHeight: "14px", letterSpacing: "0.25px" }
      : props.size === "medium"
      ? {
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.25px",
        }
      : { fontsize: "14px", lineHeight: "20px", letterSpacing: "0.1px" }),

    "&.Mui-focused": {
      fontSize: "10px",
      top:
        props.size === "small" ? "4px" : props.size === "medium" ? "2px" : "0",
    },
  })
);

export default InputLabel;
