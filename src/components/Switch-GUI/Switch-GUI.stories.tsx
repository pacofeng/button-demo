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

export const SmallUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch size="small" />} label="Switch" />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked size="small" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const SmallDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled size="small" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const SmallDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked size="small" />}
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
      <FormControlLabel
        control={<Switch defaultChecked size="medium" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const MediumDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled size="medium" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const MediumDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked size="medium" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const LargeUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel control={<Switch size="large" />} label="Switch" />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked size="large" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const LargeDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled size="large" />}
        label="Switch"
      />
    </FormControl>
  ),
};

export const LargeDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch disabled defaultChecked size="large" />}
        label="Checkbox"
      />
    </FormControl>
  ),
};
