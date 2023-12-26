import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";
import { FormControl } from "@mui/material";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Radio DLS",
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
        control={<Radio size="small" />}
        label="Radio"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="small" />}
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
        control={<Radio disabled size="small" />}
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
        control={<Radio disabled defaultChecked size="small" />}
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
        control={<Radio size="medium" />}
        label="Radio"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="medium" />}
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
        control={<Radio disabled size="medium" />}
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
        control={<Radio disabled defaultChecked size="medium" />}
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
        control={<Radio size="large" />}
        label="Radio"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Radio defaultChecked size="large" />}
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
        control={<Radio disabled size="large" />}
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
        control={<Radio disabled defaultChecked size="large" />}
        label="Radio"
        size="large"
      />
    </FormControl>
  ),
};
