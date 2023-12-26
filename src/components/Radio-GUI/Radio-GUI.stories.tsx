import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio-GUI";
import FormControl from "../FormControl-GUI";
import { FormControlLabel } from "@mui/material";

const meta = {
  title: "Components/Radio GUI",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

// Radio
export const DefaultUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Radio color="secondary" />} label="Radio" />
    </FormControl>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked color="secondary" />}
        label="Radio"
      />
    </FormControl>
  ),
};

export const DefaultDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled color="secondary" />}
        label="Radio"
      />
    </FormControl>
  ),
};

export const DefaultDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled defaultChecked color="secondary" />}
        label="Radio"
      />
    </FormControl>
  ),
};
