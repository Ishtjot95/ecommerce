import type {Meta , StoryObj} from "@storybook/react-vite";
import { NewArrivalTabsStory } from "./NewArrivalTabsStory";

const meta = {
component: NewArrivalTabsStory,
}satisfies Meta<typeof NewArrivalTabsStory>

export default meta;
type Story = StoryObj<typeof meta>

export const NewArrivalTab : Story = {};