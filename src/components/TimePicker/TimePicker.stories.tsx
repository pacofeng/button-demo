import type { Meta, StoryObj } from "@storybook/react";

import TimePicker from "./TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const meta = {
  title: "Components/TimePicker DLS",
  component: TimePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Small: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="small" />
    </LocalizationProvider>
  ),
};

export const SmallFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="small" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const SmallDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="small" disabled />
    </LocalizationProvider>
  ),
};
export const SmallDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
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
      <TimePicker size="medium" />
    </LocalizationProvider>
  ),
};

export const MediumFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="medium" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const MediumDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="medium" disabled />
    </LocalizationProvider>
  ),
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
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
      <TimePicker size="large" />
    </LocalizationProvider>
  ),
};

export const LargeFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="large" defaultValue={dayjs("2022-04-17T15:30")} />
    </LocalizationProvider>
  ),
};

export const LargeDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker size="large" disabled />
    </LocalizationProvider>
  ),
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        size="large"
        disabled
        defaultValue={dayjs("2022-04-17T15:30")}
      />
    </LocalizationProvider>
  ),
};
