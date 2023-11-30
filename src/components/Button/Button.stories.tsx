import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { SvgIcon } from "@mui/material";

const meta = {
  title: "Components/Button DLS",
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
    startIcon: (
      <SvgIcon>
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.76736 9.84866C7.91381 9.70221 7.91381 9.46478 7.76736 9.31833L5.03253 6.5835L7.76736 3.84866C7.91381 3.70221 7.91381 3.46478 7.76736 3.31833C7.62091 3.17189 7.38348 3.17189 7.23703 3.31833L4.23703 6.31833C4.09059 6.46478 4.09059 6.70221 4.23703 6.84866L7.23703 9.84866C7.38348 9.99511 7.62091 9.99511 7.76736 9.84866Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
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
    ...PrimarySmall.args,
    size: "large",
    variant: "primary",
    children: "Button",
  },
};

export const PrimaryDisable: Story = {
  args: {
    ...PrimarySmall.args,
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
