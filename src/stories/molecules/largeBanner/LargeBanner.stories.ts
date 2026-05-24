import type {Meta , StoryObj} from "@storybook/react-vite";
import { LargeBannerStory } from "./LargeBannerStory";

const meta = {
    component : LargeBannerStory,
} satisfies Meta<typeof LargeBannerStory>

export default meta;
type Story = StoryObj<typeof meta>

export const LargeBanner: Story = {};