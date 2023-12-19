import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";
import Button from "../Button";

const meta = {
  title: "Components/Tooltip DLS",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Small: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="small">
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};

export const SmallOpen: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="small" open>
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};

export const Medium: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="medium">
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};

export const MediumOpen: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="medium" open>
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};

export const Large: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="large">
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};

export const LargeOpen: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content" size="large" open>
        <Button>Tooltip</Button>
      </Tooltip>
    );
  },
};
