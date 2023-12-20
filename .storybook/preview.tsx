import React from "react";
import type { Preview } from "@storybook/react";
import theme from "./theme";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const MUITheme = createTheme({
  typography: {
    fontFamily: [
      "'FS Elliot Pro'",
      "Arial",
      "'MHeiHK-Medium'",
      "'MHei PRC Medium'",
    ].join(","),
  },
});

const preview: Preview = {
  parameters: {
    docs: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    expanded: true, // Adds the description and default columns
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MUIThemeProvider theme={MUITheme}>
        <Story />
      </MUIThemeProvider>
    ),
  ],
};

export default preview;
