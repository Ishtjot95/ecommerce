import type {Meta , StoryObj} from "@storybook/react-vite";
import { BreadcrumbStory } from "./BreadcrumbStory";

const meta ={
component: BreadcrumbStory,
}satisfies Meta<typeof BreadcrumbStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumb:Story = {
    args: {
        items: [
      { label: 'Home',        href: '/' },
      { label: 'Smartphones' },
    ],
    }
};