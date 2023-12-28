import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox-GUI";
import FormControl from "../FormControl-GUI";
import { FormControlLabel } from "@mui/material";

const meta = {
  title: "Components/Checkbox GUI",
  component: FormControlLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

export const SmallUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox size="small" />}
        label="复选框"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox defaultChecked size="small" />}
        label="Checkbox"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled size="small" />}
        label="Checkbox"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled defaultChecked size="small" />}
        label="Checkbox"
        size="small"
      />
    </FormControl>
  ),
};

export const MediumUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox size="medium" />}
        label="复选框"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox defaultChecked size="medium" />}
        label="Checkbox"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled size="medium" />}
        label="Checkbox"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled defaultChecked size="medium" />}
        label="Checkbox"
        size="medium"
      />
    </FormControl>
  ),
};

export const LargeUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox size="large" />}
        label="复选框"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox defaultChecked size="large" />}
        label="Checkbox"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled size="large" />}
        label="Checkbox"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Checkbox disabled defaultChecked size="large" />}
        label="Checkbox"
        size="large"
      />
    </FormControl>
  ),
};
