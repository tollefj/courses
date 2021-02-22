import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './Header';

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
    { field: 'Map', url: '/map' },
    { field: 'Data', url: '/data' }
];

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
};

export const LoggedInHeader = Template.bind({});
LoggedInHeader.args = {
};
