import React from "react";
import { ButtonProps } from "@mui/material";
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        contained: false;
        outlined: false;
        text: false;
    }
}
export declare const Button: import("@emotion/styled").StyledComponent<Omit<ButtonProps<"button", {}>, "ref"> & React.RefAttributes<HTMLButtonElement> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export default Button;
