import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";
import FormControl from "../FormControl";
import { FormControlLabel } from "@mui/material";

const meta = {
  title: "Components/Switch GUI",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

// Switch
export const DefaultUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch color="secondary" />} label="Switch" />
    </FormControl>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked color="secondary" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const DefaultDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled color="secondary" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const DefaultDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked color="secondary" />}
        label="Switch"
      />
    </FormControl>
  ),
};
