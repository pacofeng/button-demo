import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio-GUI";
import FormControl from "../FormControl";
import { FormControlLabel } from "@mui/material";

const meta = {
  title: "Components/Radio GUI",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

// Radio
export const Default: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Radio />} label="Radio" />
    </FormControl>
  ),
};
