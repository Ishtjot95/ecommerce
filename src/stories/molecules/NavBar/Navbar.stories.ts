import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavBarStory } from './NavBarStory';

const meta = {
  component: NavBarStory,
  
} satisfies Meta<typeof NavBarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBar: Story = {};