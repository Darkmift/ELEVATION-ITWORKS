import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';


const meta: Meta = {
  title: 'Example/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    defaultValue: 'foo',
    className: '',
    onChange: fn(),
    label: 'label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AAA: Story = {
  args: {
    defaultValue: 'primary',
    label: 'foo',
  },
};
export const BBB: Story = {
  args: {
    defaultValue: 'primary',
    label: 'foo',
    onChange: action('on-change'),
  },
};
export const CCC: Story = {
  args: {
    defaultValue: 'CCC',
  },
};
