import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonStory } from './ButtonStory';

const meta = {
  component: ButtonStory,
} satisfies Meta<typeof ButtonStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btntype : "primary",
    text : "Buy Now"
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    btntype : "secondary",
  }
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    btntype : "outline",
  }
};

export const OutlineBlack: Story = {
  args: {
    ...Primary.args,
    btntype : "outlineBlk",
  }
};
