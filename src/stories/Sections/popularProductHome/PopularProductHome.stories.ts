import type {Meta , StoryObj} from "@storybook/react-vite";
import { PopularProductHomeStory } from "./PopularProductHomeStory";

const meta = {

component : PopularProductHomeStory,

}satisfies Meta<typeof PopularProductHomeStory>

export default meta;
type Story = StoryObj<typeof meta>

export const PopularProductHome:Story = {}