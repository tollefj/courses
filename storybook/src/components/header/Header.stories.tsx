import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './Header';
import { HeaderProps } from './types';

export default {
  title: 'DelUTB/Meny',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

const SampleUser = {
    name: 'Ada Myhren',
    initials: 'AM'
}

const SampleMenu = [
    { label: 'Map', url: '/map' },
    { label: 'Data', url: '/data' }
];

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
};

export const LoggedInHeader = Template.bind({});
LoggedInHeader.args = {
};
