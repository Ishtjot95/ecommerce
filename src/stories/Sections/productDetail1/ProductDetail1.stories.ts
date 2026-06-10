import type {Meta , StoryObj} from "@storybook/react-vite";
import { ProductDetail1Story } from "./ProductDetail1Story";

const meta = {
component: ProductDetail1Story,
}satisfies Meta<typeof ProductDetail1Story>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDetail1:Story = {};