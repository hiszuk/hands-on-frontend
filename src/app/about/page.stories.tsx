import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './page';

const meta: Meta<typeof AboutPage> = {
  title: 'app/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  render: () => <AboutPage />
};
