import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

import { ReactComponent as DownloadIcon } from '../../assets/SVG/download.svg';

export default {
  title: 'DelUTB/Knapp',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    mode: 'primary',
    label: 'Button',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    mode: 'primary',
    size: 'large',
    label: 'Button with icon',
    icon: <DownloadIcon />
};

export const Secondary = Template.bind({});
Secondary.args = {
    mode: 'secondary',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};