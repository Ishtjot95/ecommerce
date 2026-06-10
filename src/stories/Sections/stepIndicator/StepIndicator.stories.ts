import type {Meta , StoryObj} from "@storybook/react-vite";
import {StepIndicatorStory} from "./StepIndicatorStory";

const meta = {
component: StepIndicatorStory,
}satisfies Meta<typeof StepIndicatorStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepIndicator: Story = {};