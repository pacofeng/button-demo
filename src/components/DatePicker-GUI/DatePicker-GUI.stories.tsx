import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker-GUI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const meta = {
  title: "Components/DatePicker GUI",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  ),
};
