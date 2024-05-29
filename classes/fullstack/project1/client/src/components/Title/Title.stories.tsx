import type { Meta, StoryObj } from '@storybook/react';
import Title, { TitleSize } from './Title';

const meta: Meta = {
  title: 'Example/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    text: 'Title',
    size: TitleSize.H1,
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: 'H1',
    size: TitleSize.H1,
    className: '',
  },
};

export const H3: Story = {
  args: {
    text: 'H3',
    size: TitleSize.H3,
    className: '',
  },
};
