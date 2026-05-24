import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonIconsStory } from './ButtonIconsStory';

const meta = {
  component: ButtonIconsStory,
} satisfies Meta<typeof ButtonIconsStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    btntype : "transparent",
  }
};

