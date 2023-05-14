import type { Meta, StoryObj } from '@storybook/react';

import Home from './page';
import Providers from './providers';

const meta: Meta<typeof Home> = {
  title: 'app/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => (
    <Providers>
      <Home />
    </Providers>
  )
};
