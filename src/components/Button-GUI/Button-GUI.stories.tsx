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

// primary start icon button
export const PrimarySmallStartIcon: Story = {
  args: {
    ...PrimarySmall.args,
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const PrimaryMediumStartIcon: Story = {
  args: {
    ...PrimarySmallStartIcon.args,
    size: "medium",
  },
};

export const PrimaryLargeStartIcon: Story = {
  args: {
    ...PrimarySmallStartIcon.args,
    size: "large",
  },
};

// primary end icon button
export const PrimarySmallEndIcon: Story = {
  args: {
    ...PrimarySmall.args,
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const PrimaryMediumEndIcon: Story = {
  args: {
    ...PrimarySmallEndIcon.args,
    size: "medium",
  },
};

export const PrimaryLargeEndIcon: Story = {
  args: {
    ...PrimarySmallEndIcon.args,
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

// secondary start icon button
export const SecondarySmallStartIcon: Story = {
  args: {
    ...SecondarySmall.args,
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const SecondaryMediumStartIcon: Story = {
  args: {
    ...SecondarySmallStartIcon.args,
    size: "medium",
  },
};

export const SecondaryLargeStartIcon: Story = {
  args: {
    ...SecondarySmallStartIcon.args,
    size: "large",
  },
};

// secondary end icon button
export const SecondarySmallEndIcon: Story = {
  args: {
    ...SecondarySmall.args,
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const SecondaryMediumEndIcon: Story = {
  args: {
    ...SecondarySmallEndIcon.args,
    size: "medium",
  },
};

export const SecondaryLargeEndIcon: Story = {
  args: {
    ...SecondarySmallEndIcon.args,
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

// tertiary start icon button
export const TertiarySmallStartIcon: Story = {
  args: {
    ...TertiarySmall.args,
    startIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const TertiaryMediumStartIcon: Story = {
  args: {
    ...TertiarySmallStartIcon.args,
    size: "medium",
  },
};

export const TertiaryLargeStartIcon: Story = {
  args: {
    ...TertiarySmallStartIcon.args,
    size: "large",
  },
};

// tertiary end icon button
export const TertiarySmallEndIcon: Story = {
  args: {
    ...TertiarySmall.args,
    endIcon: <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>,
  },
};

export const TertiaryMediumEndIcon: Story = {
  args: {
    ...TertiarySmallEndIcon.args,
    size: "medium",
  },
};

export const TertiaryLargeEndIcon: Story = {
  args: {
    ...TertiarySmallEndIcon.args,
    size: "large",
  },
};
