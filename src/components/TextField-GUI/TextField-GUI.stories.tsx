import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField-GUI";

const meta = {
  title: "Components/TextField GUI",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const SmallDefault: Story = {
  render: () => <TextField size="small" label="Default" />,
};

export const SmallDefaultFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const SmallError: Story = {
  render: () => <TextField size="small" label="Error" error />,
};

export const SmallErrorFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="Error Filled"
      defaultValue="Error Filled"
      error
    />
  ),
};

export const SmallDisabled: Story = {
  render: () => <TextField size="small" label="Disabled" disabled />,
};

export const SmallDisabledFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};

export const MediumDefault: Story = {
  render: () => <TextField size="medium" label="Default" />,
};

export const MediumDefaultFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const MediumError: Story = {
  render: () => <TextField size="medium" label="Error" error />,
};

export const MediumErrorFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="Error Filled"
      defaultValue="Error Filled"
      error
    />
  ),
};
export const MediumDisabled: Story = {
  render: () => <TextField size="medium" label="Disabled" disabled />,
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};

export const LargeDefault: Story = {
  render: () => <TextField size="large" label="Default" />,
};

export const LargeDefaultFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const LargeError: Story = {
  render: () => <TextField size="large" label="Error" error />,
};

export const LargeErrorFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="Error Filled"
      defaultValue="Error Filled"
      error
    />
  ),
};

export const LargeDisabled: Story = {
  render: () => <TextField size="large" label="Disabled" disabled />,
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};
