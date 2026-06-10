import type {Meta , StoryObj} from "@storybook/react-vite";
import { ProductsPage } from "./ProductsPage";

const meta = {
component: ProductsPage,
}satisfies Meta<typeof ProductsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductPage:Story = {};