import type { Meta, StoryObj } from "@storybook/react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Button } from "./Button-GUI";

const meta = {
  title: "Components/Button GUI",
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
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
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
