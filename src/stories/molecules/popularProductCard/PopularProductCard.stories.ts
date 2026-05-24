import type {Meta , StoryObj} from "@storybook/react-vite";
import {PopularProductCardstory} from "./PopularProductCardstory";

const meta = {
component: PopularProductCardstory,

}satisfies Meta<typeof PopularProductCardstory>

export default meta;
type Story = StoryObj<typeof meta> 

export const PopularProductCard : Story = {};