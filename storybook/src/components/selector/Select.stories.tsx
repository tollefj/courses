import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from './Select';

export default {
  title: 'DelUTB/Velger',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

const sampleOptions = [
    { label: '123', value: 123 },
    { label: '234', value: 234 },
    { label: '345', value: 345 },
    { label: '456', value: 456 },
]

const SampleOptions = () => (
    <>
        {sampleOptions.map((opt) => (
            <option key={opt.label} value={opt.value}>
                {opt.label}
            </option>
        ))}
    </>
)

const SampleChildContent = () => (
    <div style={{
        backgroundColor: 'black',
        color: 'white',
        width: 200,
        height: 200
    }}>
        <p>hei</p>
        <p>hå</p>
    </div>
)


export const WideSelector = Template.bind({});
WideSelector.args = {
    label: 'very wide',
    size: 'wide',
    children: <SampleOptions />
};

export const NarrowSelector = Template.bind({});
NarrowSelector.args = {
    label: 'so narrow',
    size: 'narrow',
    children: <SampleChildContent />
};
