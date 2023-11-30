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
    size: "large",
    variant: "primary",
    children: "Button",
    endIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2988 7.49181C10.9082 7.88233 10.9082 8.5155 11.2988 8.90602L18.5916 16.1989L11.2988 23.4918C10.9082 23.8823 10.9082 24.5155 11.2988 24.906C11.6893 25.2965 12.3224 25.2965 12.713 24.906L20.713 16.906C21.1035 16.5155 21.1035 15.8823 20.713 15.4918L12.713 7.49181C12.3224 7.10128 11.6893 7.10128 11.2988 7.49181Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0665 7.13825C12.4807 6.55247 11.531 6.55247 10.9452 7.13825C10.3594 7.72404 10.3594 8.67379 10.9452 9.25957L17.8845 16.1989L10.9452 23.1383C10.3594 23.724 10.3594 24.6738 10.9452 25.2596C11.531 25.8454 12.4807 25.8454 13.0665 25.2596L21.0665 17.2596C21.6523 16.6738 21.6523 15.724 21.0665 15.1383L13.0665 7.13825ZM11.6523 7.84536C11.8476 7.6501 12.1642 7.6501 12.3594 7.84536L20.3594 15.8454C20.5547 16.0406 20.5547 16.3572 20.3594 16.5525L12.3594 24.5525C12.1642 24.7477 11.8476 24.7477 11.6523 24.5525C11.457 24.3572 11.457 24.0406 11.6523 23.8454L18.9452 16.5525C19.1405 16.3572 19.1405 16.0406 18.9452 15.8454L11.6523 8.55247C11.457 8.3572 11.457 8.04062 11.6523 7.84536Z"
            fill="white"
          />
        </svg>
      </SvgIcon>
    ),
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
