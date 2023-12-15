import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField";

const meta = {
  title: "Components/TextField DLS",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const SmallDefault: Story = {
  render: () => <TextField size="small" label="TextField" />,
};

export const SmallDefaultFilled: Story = {
  render: () => (
    <TextField size="small" label="TextField" defaultValue="Hello" />
  ),
};

export const SmallError: Story = {
  render: () => <TextField size="small" label="TextField" error />,
};

export const SmallErrorFilled: Story = {
  render: () => (
    <TextField size="small" label="TextField" defaultValue="Hello" error />
  ),
};

export const SmallDisabled: Story = {
  render: () => <TextField size="small" label="TextField" disabled />,
};

export const SmallDisabledFilled: Story = {
  render: () => (
    <TextField size="small" label="TextField" defaultValue="Hello" disabled />
  ),
};

export const MediumDefault: Story = {
  render: () => <TextField size="medium" label="TextField" />,
};

export const MediumDefaultFilled: Story = {
  render: () => (
    <TextField size="medium" label="TextField" defaultValue="Hello" />
  ),
};

export const MediumError: Story = {
  render: () => <TextField size="medium" label="TextField" error />,
};

export const MediumErrorFilled: Story = {
  render: () => (
    <TextField size="medium" label="TextField" defaultValue="Hello" error />
  ),
};
export const MediumDisabled: Story = {
  render: () => <TextField size="medium" label="TextField" disabled />,
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <TextField size="medium" label="TextField" defaultValue="Hello" disabled />
  ),
};

export const LargeDefault: Story = {
  render: () => <TextField size="large" label="TextField" />,
};

export const LargeDefaultFilled: Story = {
  render: () => (
    <TextField size="large" label="TextField" defaultValue="Hello" />
  ),
};

export const LargeError: Story = {
  render: () => <TextField size="large" label="TextField" error />,
};

export const LargeErrorFilled: Story = {
  render: () => (
    <TextField size="large" label="TextField" defaultValue="Hello" error />
  ),
};

export const LargeDisabled: Story = {
  render: () => <TextField size="large" label="TextField" disabled />,
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <TextField size="large" label="TextField" defaultValue="Hello" disabled />
  ),
};
