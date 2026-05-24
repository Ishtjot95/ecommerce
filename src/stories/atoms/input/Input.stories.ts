import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputGroupStory } from './InputGroupStory';

const meta = {
  component: InputGroupStory,
} satisfies Meta<typeof InputGroupStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {};