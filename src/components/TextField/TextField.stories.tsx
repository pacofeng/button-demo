import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField";
import MenuItem from "@mui/material/MenuItem";

const meta = {
  title: "Components/TextField DLS",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

const currencies = [
  {
    value: "USD",
    label: "$ This is a long currency",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export const SmallDefault: Story = {
  render: () => <TextField size="small" label="Default" type="number" />,
};

export const SmallDefaultFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const SmallError: Story = {
  render: () => <TextField size="small" label="错误" error />,
};

export const SmallErrorFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="错误 Filled"
      defaultValue="错误 Filled"
      error
    />
  ),
};

export const SmallDisabled: Story = {
  render: () => <TextField size="small" label="Disabled" disabled />,
};

export const SmallDisabledFilled: Story = {
  render: () => (
    <TextField
      size="small"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};

export const SmallSelect: Story = {
  render: () => (
    <TextField
      select
      sx={{ width: 100 }}
      label="Currency"
      size="small"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};

export const SmallSelectFilled: Story = {
  render: () => (
    <TextField
      select
      sx={{ width: 100 }}
      label="Currency Filled"
      defaultValue="EUR"
      size="small"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};

export const MediumDefault: Story = {
  render: () => <TextField size="medium" label="Default" type="number" />,
};

export const MediumDefaultFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const MediumError: Story = {
  render: () => <TextField size="medium" label="错误" error />,
};

export const MediumErrorFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="错误 Filled"
      defaultValue="错误 Filled"
      error
    />
  ),
};
export const MediumDisabled: Story = {
  render: () => <TextField size="medium" label="Disabled" disabled />,
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <TextField
      size="medium"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};

export const MediumSelect: Story = {
  render: () => (
    <TextField
      select
      sx={{ width: 100 }}
      label="Currency"
      size="medium"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};

export const MediumSelectFilled: Story = {
  render: () => (
    <TextField
      select
      sx={{ width: 100 }}
      label="Currency Filled"
      defaultValue="EUR"
      size="medium"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};

export const LargeDefault: Story = {
  render: () => <TextField size="large" label="Default" type="number" />,
};

export const LargeDefaultFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="Default Filled"
      defaultValue="Default Filled"
    />
  ),
};

export const LargeError: Story = {
  render: () => <TextField size="large" label="错误" error />,
};

export const LargeErrorFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="错误 Filled"
      defaultValue="错误 Filled"
      error
    />
  ),
};

export const LargeDisabled: Story = {
  render: () => <TextField size="large" label="Disabled" disabled />,
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <TextField
      size="large"
      label="Disabled Filled"
      defaultValue="Disabled Filled"
      disabled
    />
  ),
};

export const LargeSelect: Story = {
  render: () => (
    <TextField
      sx={{ width: 100 }}
      select
      label="Currency"
      size="large"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};

export const LargeSelectFilled: Story = {
  render: () => (
    <TextField
      sx={{ width: 100 }}
      select
      label="Currency Filled"
      defaultValue="EUR"
      size="large"
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ),
};
