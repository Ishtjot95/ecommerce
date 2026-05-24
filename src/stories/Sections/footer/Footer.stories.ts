import type {Meta , StoryObj} from "@storybook/react-vite";
import { FooterStory } from "./Footer";

const meta = {
component: FooterStory,
}satisfies Meta<typeof FooterStory>

export default meta;
type Story = StoryObj<typeof meta>

export const Footer :Story = {};