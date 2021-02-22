import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './Header';
import { HeaderProps } from './types';

export default {
  title: 'DelUTB/Meny',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
};

export const LoggedInHeader = Template.bind({});
LoggedInHeader.args = {
};
