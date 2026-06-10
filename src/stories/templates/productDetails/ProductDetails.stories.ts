import type {Meta , StoryObj} from "@storybook/react-vite";
import {ProductDetailsPage} from "./ProductDetailsPage";

const meta = {
component: ProductDetailsPage,
}satisfies Meta<typeof ProductDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDetails: Story = {};