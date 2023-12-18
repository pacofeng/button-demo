import type { Meta, StoryObj } from "@storybook/react";

import DateTimePicker from "./DateTimePicker-GUI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const meta = {
  title: "Components/DateTimePicker GUI",
  component: DateTimePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Small: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="small" />
    </LocalizationProvider>
  ),
};

export const SmallFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="small" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const SmallDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="small" disabled />
    </LocalizationProvider>
  ),
};
export const SmallDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        size="small"
        disabled
        defaultValue={dayjs("2022-04-17T15:30")}
      />
    </LocalizationProvider>
  ),
};

export const Medium: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="medium" />
    </LocalizationProvider>
  ),
};

export const MediumFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="medium" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const MediumDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="medium" disabled />
    </LocalizationProvider>
  ),
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        size="medium"
        disabled
        defaultValue={dayjs("2022-04-17T15:30")}
      />
    </LocalizationProvider>
  ),
};

export const Large: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="large" />
    </LocalizationProvider>
  ),
};

export const LargeFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="large" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const LargeDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker size="large" disabled />
    </LocalizationProvider>
  ),
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        size="large"
        disabled
        defaultValue={dayjs("2022-04-17T15:30")}
      />
    </LocalizationProvider>
  ),
};
