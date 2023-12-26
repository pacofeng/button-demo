import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";
import FormControl from "../FormControl";
import FormControlLabel from "../FormControlLabel";

const meta = {
  title: "Components/Switch DLS",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const SmallUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch size="small" />}
        label="Switch"
        size="small"
      />
    </FormControl>
  ),
};

export const SmallChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked size="small" />}
        label="Switch"
        size="small"
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
        size="small"
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
        size="small"
      />
    </FormControl>
  ),
};

export const MediumUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch size="medium" />}
        label="Switch"
        size="medium"
      />
    </FormControl>
  ),
};

export const MediumChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked size="medium" />}
        label="Switch"
        size="medium"
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
        size="medium"
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
        size="medium"
      />
    </FormControl>
  ),
};

export const LargeUnchecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch size="large" />}
        label="Switch"
        size="large"
      />
    </FormControl>
  ),
};

export const LargeChecked: Story = {
  render: () => (
    <FormControl>
      <FormControlLabel
        control={<Switch defaultChecked size="large" />}
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
        control={<Switch disabled size="large" />}
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
        control={<Switch disabled defaultChecked size="large" />}
        label="Checkbox"
        size="large"
      />
    </FormControl>
  ),
};
