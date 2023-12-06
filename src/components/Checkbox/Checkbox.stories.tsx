import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";
import Radio from "../Radio";
import FormControl from "../FormControl";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Checkbox DLS",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

export const Default: Story = {
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

export const DefaultDisable: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Checkbox disabled />} label="Checkbox" />
    </FormControl>
  ),
};

export const DefaultDisableChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled defaultChecked />}
        label="Checkbox"
      />
    </FormControl>
  ),
};
