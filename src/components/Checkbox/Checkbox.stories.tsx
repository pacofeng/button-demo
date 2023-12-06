import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";
import FormControl from "../FormControl";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Checkbox DLS",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

export const DefaultUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Checkbox />} label="Checkbox" />
    </FormControl>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Checkbox"
      />
    </FormControl>
  ),
};

export const DefaultDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Checkbox disabled />} label="Checkbox" />
    </FormControl>
  ),
};

export const DefaultDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled defaultChecked />}
        label="Checkbox"
      />
    </FormControl>
  ),
};
