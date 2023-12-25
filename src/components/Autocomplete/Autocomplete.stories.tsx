import type { Meta, StoryObj } from "@storybook/react";

import Autocomplete from "./Autocomplete";
import TextField from "../TextField";

const meta = {
  title: "Components/Autocomplete DLS",
  component: Autocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const films = [
  {
    label: "The Shawshank Redemption",
    year: 1994,
  },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

export const Small: Story = {
  render: () => (
    <Autocomplete
      size="small"
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="small" />
      )}
    />
  ),
};

export const SmallFilled: Story = {
  render: () => (
    <Autocomplete
      size="small"
      sx={{ width: 200 }}
      options={films}
      defaultValue="The Lord of the Rings: The Return of the King"
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="small" />
      )}
    />
  ),
};

export const SmallDisabled: Story = {
  render: () => (
    <Autocomplete
      size="small"
      disabled
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="small" />
      )}
    />
  ),
};

export const SmallDisabledFilled: Story = {
  render: () => (
    <Autocomplete
      size="small"
      disabled
      sx={{ width: 200 }}
      options={films}
      defaultValue="The Shawshank Redemption"
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="small" />
      )}
    />
  ),
};

export const Medium: Story = {
  render: () => (
    <Autocomplete
      size="medium"
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="medium" />
      )}
    />
  ),
};

export const MediumFilled: Story = {
  render: () => (
    <Autocomplete
      size="medium"
      sx={{ width: 200 }}
      options={films}
      defaultValue="The Lord of the Rings: The Return of the King"
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="medium" />
      )}
    />
  ),
};

export const MediumDisabled: Story = {
  render: () => (
    <Autocomplete
      size="medium"
      disabled
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="medium" />
      )}
    />
  ),
};

export const MediumDisabledFilled: Story = {
  render: () => (
    <Autocomplete
      size="medium"
      disabled
      sx={{ width: 200 }}
      options={films}
      defaultValue="The Shawshank Redemption"
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="medium" />
      )}
    />
  ),
};

export const Large: Story = {
  render: () => (
    <Autocomplete
      getOptionDisabled={(option) => option.year > 2000}
      size="large"
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="large" />
      )}
    />
  ),
};

export const LargeFilled: Story = {
  render: () => (
    <Autocomplete
      size="large"
      sx={{ width: 200 }}
      options={films}
      defaultValue="The Shawshank Redemption"
      isOptionEqualToValue={(option, value) => option.label === value}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="large" />
      )}
    />
  ),
};

export const LargeDisabled: Story = {
  render: () => (
    <Autocomplete
      size="large"
      disabled
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="large" />
      )}
    />
  ),
};

export const LargeDisabledFilled: Story = {
  render: () => (
    <Autocomplete
      size="large"
      disabled
      defaultValue="The Lord of the Rings: The Return of the King"
      isOptionEqualToValue={(option, value) => option.label === value}
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="large" />
      )}
    />
  ),
};
