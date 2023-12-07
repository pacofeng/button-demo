import type { Meta, StoryObj } from "@storybook/react";

import DateTimePicker from "./DateTimePicker-GUI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const meta = {
  title: "Components/DateTimePicker GUI",
  component: DateTimePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker />
    </LocalizationProvider>
  ),
};
