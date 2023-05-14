import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './page';
import RootLayout from '../layout'

const meta: Meta<typeof HomePage> = {
  title: 'app/DemoPage',
  component: HomePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const WithoutLayout: Story = {
  render: () => <HomePage />
};

export const WithLayout: Story = {
  render: () => (
    <RootLayout>
      <HomePage />
    </RootLayout>
  )
};
