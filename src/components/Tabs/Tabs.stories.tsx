import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Tabs from "./Tabs";
import Tab from "../Tab";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const meta = {
  title: "Components/Tabs DLS",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const DefaultSmall: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="small">
        <Tab label="Tab1" />
        <Tab label="Tab2" />
        <Tab label="Tab3" />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const DefaultMedium: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="medium">
        <Tab label="Tab1" />
        <Tab label="Tab2" />
        <Tab label="Tab3" />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const DefaultLarge: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="large">
        <Tab label="Tab1" />
        <Tab label="Tab2" />
        <Tab label="Tab3" />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const SmallWithDisabled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="small">
        <Tab label="Tab1" disabled />
        <Tab label="Tab2" />
        <Tab label="Tab3" disabled />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const MediumWithDisabled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab label="Tab1" disabled />
        <Tab label="Tab2" />
        <Tab label="Tab3" disabled />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const LargeWithDisabled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="large">
        <Tab label="Tab1" disabled />
        <Tab label="Tab2" />
        <Tab label="Tab3" disabled />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const SmallWithIcon: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="small">
        <Tab
          label="Tab1"
          icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>}
          iconPosition="start"
        />
        <Tab
          label="Tab2"
          icon={<FavoriteIcon></FavoriteIcon>}
          iconPosition="end"
        />
        <Tab icon={<PersonPinIcon></PersonPinIcon>} />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const MediumWithIcon: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab
          label="Tab1"
          icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>}
          iconPosition="start"
        />
        <Tab
          label="Tab2"
          icon={<FavoriteIcon></FavoriteIcon>}
          iconPosition="end"
        />
        <Tab icon={<PersonPinIcon></PersonPinIcon>} />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};

export const LargeWithIcon: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs {...args} value={value} onChange={handleChange} size="large">
        <Tab
          label="Tab1"
          icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>}
          iconPosition="start"
        />
        <Tab
          label="Tab2"
          icon={<FavoriteIcon></FavoriteIcon>}
          iconPosition="end"
        />
        <Tab icon={<PersonPinIcon></PersonPinIcon>} />
        <Tab label="Tab4" />
      </Tabs>
    );
  },
};
