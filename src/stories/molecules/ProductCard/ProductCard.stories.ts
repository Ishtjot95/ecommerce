import type {Meta , StoryObj} from "@storybook/react-vite";
import { ProductCardStory } from "./ProductCardStory";

const meta = {
component: ProductCardStory,
}satisfies Meta<typeof ProductCardStory>

export default meta;
type Story = StoryObj<typeof meta>

export const ProductCard : Story = {};