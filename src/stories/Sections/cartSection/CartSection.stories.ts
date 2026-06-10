import type {Meta ,  StoryObj} from "@storybook/react-vite";
import {CartSectionStory} from "./CartSectionStory";

const meta = {
component: CartSectionStory,
}satisfies Meta<typeof CartSectionStory>;

export default meta;
type Story = StoryObj<typeof CartSectionStory>;

export const CartSection:Story = {};