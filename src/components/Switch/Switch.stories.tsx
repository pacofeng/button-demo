import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";
import FormControl from "../FormControl";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Switch DLS",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

export const SmallUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch />} label="Switch" />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
    </FormControl>
  ),
};

export const SmallDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch disabled />} label="Switch" />
    </FormControl>
  ),
};

export const SmallDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const MediumUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch size="medium" />} label="Switch" />
    </FormControl>
  ),
};

export const MediumChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
    </FormControl>
  ),
};

export const MediumDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch disabled />} label="Switch" />
    </FormControl>
  ),
};

export const MediumDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const LargeUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch />} label="Switch" size="large" />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Switch"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled />}
        label="Switch"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked />}
        label="Checkbox"
        size="large"
      />
    </FormControl>
  ),
};
