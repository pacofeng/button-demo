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
  { label: "The Shawshank Redemption Redemption Redemption", year: 1994 },
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

export const Large: Story = {
  render: () => (
    <Autocomplete
      size="large"
      sx={{ width: 200 }}
      options={films}
      renderInput={(params) => (
        <TextField {...params} label="Movie" size="large" />
      )}
    />
  ),
};
