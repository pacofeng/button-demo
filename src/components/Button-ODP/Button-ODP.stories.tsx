import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button-ODP";

const meta = {
  title: "Components/Button ODP",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "Button",
  },
};

export const PrimaryMedium: Story = {
  args: {
    size: "medium",
    variant: "primary",
    children: "Button",
  },
};

export const PrimaryLarge: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Button",
  },
};

export const PrimaryDisable: Story = {
  args: {
    disabled: true,
    variant: "primary",
    children: "Button",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Button",
  },
};
export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};
export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Button",
  },
};
export const SecondaryDisable: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "Button",
  },
};

export const TertiarySmall: Story = {
  args: {
    variant: "tertiary",
    size: "small",
    children: "Button",
  },
};
export const TertiaryMedium: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Button",
  },
};
export const TertiaryLarge: Story = {
  args: {
    variant: "tertiary",
    size: "large",
    children: "Button",
  },
};
export const TertiaryDisable: Story = {
  args: {
    variant: "tertiary",
    disabled: true,
    children: "Button",
  },
};
