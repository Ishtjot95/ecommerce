import type {Meta , StoryObj} from "@storybook/react-vite";
import {ShoppingCartStory} from "./ShoppingCartStory";

const meta = {
component: ShoppingCartStory,
}satisfies Meta<typeof ShoppingCartStory>;

export default meta;
type Story = StoryObj <typeof meta>;

export const ShoppingCart: Story = {};