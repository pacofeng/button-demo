import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker-GUI";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const meta = {
  title: "Components/DatePicker GUI",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Small: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="small" />
    </LocalizationProvider>
  ),
};

export const SmallFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="small" defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};

export const SmallDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="small" disabled />
    </LocalizationProvider>
  ),
};
export const SmallDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="small" disabled defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};

export const Medium: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="medium" />
    </LocalizationProvider>
  ),
};

export const MediumFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="medium" defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};

export const MediumDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="medium" disabled />
    </LocalizationProvider>
  ),
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="medium" disabled defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};

export const Large: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="large" />
    </LocalizationProvider>
  ),
};

export const LargeFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="large" defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};

export const LargeDisabled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="large" disabled />
    </LocalizationProvider>
  ),
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker size="large" disabled defaultValue={dayjs("2022-04-17")} />
    </LocalizationProvider>
  ),
};
