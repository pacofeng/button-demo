import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox-GUI";
import FormControl from "../FormControl";
import { FormControlLabel } from "@mui/material";

const meta = {
  title: "Components/Checkbox GUI",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

// Checkbox
export const Default: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Checkbox />} label="Checkbox" />
    </FormControl>
  ),
};
