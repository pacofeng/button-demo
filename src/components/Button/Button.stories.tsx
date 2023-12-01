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

// primary button
export const PrimarySmall: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "Button",
  },
};

export const PrimaryMedium: Story = {
  args: {
    ...PrimarySmall.args,
    size: "medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...PrimarySmall.args,
    size: "large",
  },
};

// primary disable button
export const PrimarySmallDisable: Story = {
  args: {
    ...PrimarySmall.args,
    disabled: true,
  },
};

export const PrimaryMediumDisable: Story = {
  args: {
    ...PrimarySmallDisable.args,
    size: "medium",
  },
};

export const PrimaryLargeDisable: Story = {
  args: {
    ...PrimarySmallDisable.args,
    size: "large",
  },
};

// primary leading icon button
export const PrimarySmallLeadingIcon: Story = {
  args: {
    ...PrimarySmall.args,
    startIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const PrimaryMediumLeadingIcon: Story = {
  args: {
    ...PrimarySmallLeadingIcon.args,
    size: "medium",
  },
};

export const PrimaryLargeLeadingIcon: Story = {
  args: {
    ...PrimarySmallLeadingIcon.args,
    size: "large",
  },
};

// primary trailing icon button
export const PrimarySmallTrailingIcon: Story = {
  args: {
    ...PrimarySmall.args,
    endIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const PrimaryMediumTrailingIcon: Story = {
  args: {
    ...PrimarySmallTrailingIcon.args,
    size: "medium",
  },
};

export const PrimaryLargeTrailingIcon: Story = {
  args: {
    ...PrimarySmallTrailingIcon.args,
    size: "large",
  },
};

// secondary button
export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Button",
  },
};
export const SecondaryMedium: Story = {
  args: {
    ...SecondarySmall.args,
    size: "medium",
  },
};
export const SecondaryLarge: Story = {
  args: {
    ...SecondarySmall.args,
    size: "large",
  },
};

// secondary disable button
export const SecondarySmallDisable: Story = {
  args: {
    ...SecondarySmall.args,
    disabled: true,
  },
};
export const SecondaryMediumDisable: Story = {
  args: {
    ...SecondarySmallDisable.args,
    size: "medium",
  },
};
export const SecondaryLargeDisable: Story = {
  args: {
    ...SecondarySmallDisable.args,
    size: "large",
  },
};

// secondary leading icon button
export const SecondarySmallLeadingIcon: Story = {
  args: {
    ...SecondarySmall.args,
    startIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const SecondaryMediumLeadingIcon: Story = {
  args: {
    ...SecondarySmallLeadingIcon.args,
    size: "medium",
  },
};

export const SecondaryLargeLeadingIcon: Story = {
  args: {
    ...SecondarySmallLeadingIcon.args,
    size: "large",
  },
};

// secondary trailing icon button
export const SecondarySmallTrailingIcon: Story = {
  args: {
    ...SecondarySmall.args,
    endIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const SecondaryMediumTrailingIcon: Story = {
  args: {
    ...SecondarySmallTrailingIcon.args,
    size: "medium",
  },
};

export const SecondaryLargeTrailingIcon: Story = {
  args: {
    ...SecondarySmallTrailingIcon.args,
    size: "large",
  },
};

// tertiary button
export const TertiarySmall: Story = {
  args: {
    variant: "tertiary",
    size: "small",
    children: "Button",
  },
};
export const TertiaryMedium: Story = {
  args: {
    ...TertiarySmall.args,
    size: "medium",
  },
};
export const TertiaryLarge: Story = {
  args: {
    ...TertiarySmall.args,
    size: "large",
  },
};

// tertiary disable button
export const TertiarySmallDisable: Story = {
  args: {
    ...TertiarySmall.args,
    disabled: true,
  },
};
export const TertiaryMediumDisable: Story = {
  args: {
    ...TertiarySmallDisable.args,
    size: "medium",
  },
};
export const TertiaryLargeDisable: Story = {
  args: {
    ...TertiarySmallDisable.args,
    size: "large",
  },
};

// tertiary leading icon button
export const TertiarySmallLeadingIcon: Story = {
  args: {
    ...TertiarySmall.args,
    startIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const TertiaryMediumLeadingIcon: Story = {
  args: {
    ...TertiarySmallLeadingIcon.args,
    size: "medium",
  },
};

export const TertiaryLargeLeadingIcon: Story = {
  args: {
    ...TertiarySmallLeadingIcon.args,
    size: "large",
  },
};

// tertiary trailing icon button
export const TertiarySmallTrailingIcon: Story = {
  args: {
    ...TertiarySmall.args,
    endIcon: (
      <SvgIcon>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2929 14.491C10.6834 14.1005 11.3166 14.1005 11.7071 14.491L15 17.7839L15 5.19812C15 4.64584 15.4477 4.19812 16 4.19812C16.5523 4.19812 17 4.64584 17 5.19812L17 17.7839L20.2929 14.491C20.6834 14.1005 21.3166 14.1005 21.7071 14.491C22.0976 14.8815 22.0976 15.5147 21.7071 15.9052L16.7071 20.9052C16.3166 21.2958 15.6834 21.2958 15.2929 20.9052L10.2929 15.9052C9.90237 15.5147 9.90237 14.8815 10.2929 14.491Z"
            fill="currentColor"
          />
          <path
            d="M4 18.1981C4.55228 18.1981 5 18.6458 5 19.1981V24.1981C5 25.3027 5.89543 26.1981 7 26.1981H25C26.1046 26.1981 27 25.3027 27 24.1981V19.1981C27 18.6458 27.4477 18.1981 28 18.1981C28.5523 18.1981 29 18.6458 29 19.1981V24.1981C29 26.4073 27.2091 28.1981 25 28.1981H7C4.79086 28.1981 3 26.4073 3 24.1981V19.1981C3 18.6458 3.44772 18.1981 4 18.1981Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
};

export const TertiaryMediumTrailingIcon: Story = {
  args: {
    ...TertiarySmallTrailingIcon.args,
    size: "medium",
  },
};

export const TertiaryLargeTrailingIcon: Story = {
  args: {
    ...TertiarySmallTrailingIcon.args,
    size: "large",
  },
};
