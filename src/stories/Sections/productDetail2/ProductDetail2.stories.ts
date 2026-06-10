import type {Meta , StoryObj} from "@storybook/react-vite";
import { ProductDetail2Story } from "./ProductDetail2Story";

const meta = {
component: ProductDetail2Story,
}satisfies Meta<typeof ProductDetail2Story>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDetail2:Story = {};