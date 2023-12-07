import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip-GUI";

const meta = {
  title: "Components/Tooltip GUI",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => {
    return (
      <Tooltip {...args} title="This is tooltip content">
        <button>Tooltip</button>
      </Tooltip>
    );
  },
};
