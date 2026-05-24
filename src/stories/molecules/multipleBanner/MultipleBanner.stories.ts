import type {Meta , StoryObj} from "@storybook/react-vite";
import { MultipleBannerStory } from "./MultipleBannerStory";

const meta = {
    component: MultipleBannerStory,
}satisfies Meta<typeof MultipleBannerStory>

export default meta;
type Story = StoryObj<typeof meta>

export const MultipleBanner : Story ={}