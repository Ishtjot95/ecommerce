import type {Meta , StoryObj} from '@storybook/react-vite';
import { HomeStory } from './HomeStory';

const meta = {
component: HomeStory,
}satisfies Meta<typeof HomeStory>;

export default meta;
type Story = StoryObj<typeof meta>

export const Home: Story = {};