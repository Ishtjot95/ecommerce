import type {Meta , StoryObj} from "@storybook/react-vite";
import { CategorySectionStory } from "./CategorySectionStory";

const meta = {
    component : CategorySectionStory,
}satisfies Meta<typeof CategorySectionStory>

export default meta;
type Story = StoryObj<typeof meta>

export const CategorySection: Story = {};