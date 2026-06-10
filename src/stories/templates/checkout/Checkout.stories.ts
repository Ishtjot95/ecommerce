import type {Meta , StoryObj} from "@storybook/react-vite";
import {Checkout} from './Checkout';

const meta = {
component: Checkout,
}satisfies Meta<typeof Checkout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutStory: Story = {};