import type { Preview } from "@storybook/react";
import theme from "./theme";

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
};

export default preview;
