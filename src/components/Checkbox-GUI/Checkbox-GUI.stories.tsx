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

export const Default: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox color="secondary" />}
        label="Checkbox"
      />
    </FormControl>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox color="secondary" defaultChecked />}
        label="Checkbox"
      />
    </FormControl>
  ),
};

export const DefaultDisable: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox color="secondary" disabled />}
        label="Checkbox"
      />
    </FormControl>
  ),
};

export const DefaultDisableChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox color="secondary" disabled defaultChecked />}
        label="Checkbox"
      />
    </FormControl>
  ),
};
