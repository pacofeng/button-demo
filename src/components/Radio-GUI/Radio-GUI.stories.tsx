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
export const SmallUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio size="small" color="secondary" />}
        label="单选按钮"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="small" color="secondary" />}
        label="Radio"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled size="small" color="secondary" />}
        label="Radio"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={
          <Radio disabled defaultChecked size="small" color="secondary" />
        }
        label="Radio"
        size="small"
      />
    </FormControl>
  ),
};

export const MediumUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio size="medium" color="secondary" />}
        label="单选按钮"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="medium" color="secondary" />}
        label="Radio"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled size="medium" color="secondary" />}
        label="Radio"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={
          <Radio disabled defaultChecked size="medium" color="secondary" />
        }
        label="Radio"
        size="medium"
      />
    </FormControl>
  ),
};

export const LargeUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio size="large" color="secondary" />}
        label="单选按钮"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="large" color="secondary" />}
        label="Radio"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio disabled size="large" color="secondary" />}
        label="Radio"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeDisabledChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={
          <Radio disabled defaultChecked size="large" color="secondary" />
        }
        label="Radio"
        size="large"
      />
    </FormControl>
  ),
};
