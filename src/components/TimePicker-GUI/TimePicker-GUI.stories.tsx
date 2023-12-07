import type { Meta, StoryObj } from "@storybook/react";

import TimePicker from "./TimePicker-GUI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const meta = {
  title: "Components/TimePicker GUI",
  component: TimePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker />
    </LocalizationProvider>
  ),
};
