import type {Meta , StoryObj} from "@storybook/react-vite"
import { ProductHomeStory } from "./ProductHomeStory"

const meta = {
component: ProductHomeStory,
}satisfies Meta<typeof ProductHomeStory>

export default meta;
type Story = StoryObj<typeof meta>

export const ProductHome : Story = {};