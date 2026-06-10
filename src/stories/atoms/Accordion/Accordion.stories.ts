import type {Meta , StoryObj} from "@storybook/react-vite";
import { AccordionStory } from "./AccordionStory";

const meta = {
component: AccordionStory,
}satisfies Meta<typeof AccordionStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {};