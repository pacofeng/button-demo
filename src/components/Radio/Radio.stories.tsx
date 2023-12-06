import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";
import FormControl from "../FormControl";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Radio DLS",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

// Radio
export const DefaultUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Radio />} label="Radio" />
    </FormControl>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Radio defaultChecked />} label="Radio" />
    </FormControl>
  ),
};

export const DefaultDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Radio disabled />} label="Radio" />
    </FormControl>
  ),
};

export const DefaultDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled defaultChecked />}
        label="Radio"
      />
    </FormControl>
  ),
};
