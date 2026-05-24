import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavLinkStory } from './NavLinkStory';


const meta = {
  component: NavLinkStory,

} satisfies Meta<typeof NavLinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InActive: Story = {
  args: {
    label:    'Home',
    to:       '/',
    isActive: false,
  },
}

export const Active: Story = {
    args: {
    label:    'Home',
    to:       '/',
    isActive: true,
  },
};