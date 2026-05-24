import type {Meta,StoryObj} from "@storybook/react-vite";
import { BottomBannerStory } from "./BottomBannerStory";

const meta = {
component: BottomBannerStory,
}satisfies Meta<typeof BottomBannerStory>

export default meta;
type Story = StoryObj<typeof meta>

export const BottomBanner:Story = {};