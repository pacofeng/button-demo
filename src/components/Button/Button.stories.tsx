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
      <SvgIcon color="inherit">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4.2981C10.067 4.2981 8.5 5.8651 8.5 7.7981C8.5 9.73109 10.067 11.2981 12 11.2981C13.933 11.2981 15.5 9.73109 15.5 7.7981C15.5 5.8651 13.933 4.2981 12 4.2981ZM6.5 7.7981C6.5 4.76053 8.96243 2.2981 12 2.2981C15.0376 2.2981 17.5 4.76053 17.5 7.7981C17.5 10.8357 15.0376 13.2981 12 13.2981C8.96243 13.2981 6.5 10.8357 6.5 7.7981Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5587 17.1955C14.3423 16.5973 12.9942 16.3172 11.6403 16.3813C10.2863 16.4454 8.97066 16.8516 7.81625 17.562C6.66184 18.2724 5.70632 19.2638 5.03894 20.4436C4.3724 21.622 4.01499 22.9498 4 24.3035V26.2981H9C9.55228 26.2981 10 26.7458 10 27.2981C10 27.8504 9.55228 28.2981 9 28.2981H3C2.44772 28.2981 2 27.8504 2 27.2981V24.2877C2.01769 22.5942 2.46434 20.9329 3.29815 19.4589C4.13196 17.9849 5.32576 16.7462 6.76805 15.8587C8.21034 14.9711 9.85406 14.4636 11.5457 14.3835C13.2373 14.3034 14.9216 14.6534 16.4413 15.4007C16.9369 15.6445 17.1411 16.2438 16.8974 16.7394C16.6536 17.235 16.0543 17.4392 15.5587 17.1955Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3195 14.6181C25.5849 14.618 25.8394 14.7233 26.0271 14.911L29.7071 18.591C30.0976 18.9815 30.0976 19.6147 29.7071 20.0052L20.2871 29.4252C20.1325 29.5798 19.9315 29.6795 19.7149 29.709L15.4549 30.289C15.1445 30.3312 14.8323 30.2256 14.6113 30.0036C14.3903 29.7816 14.2861 29.4688 14.3298 29.1586L14.9298 24.8986C14.96 24.6841 15.0591 24.4851 15.2121 24.3317L24.6121 14.9117C24.7996 14.7239 25.0541 14.6182 25.3195 14.6181ZM25.3208 17.0331L16.8637 25.5081L16.4945 28.129L19.1112 27.7727L27.5858 19.2981L25.3208 17.0331Z"
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
