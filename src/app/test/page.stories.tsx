import type { Meta, StoryObj } from '@storybook/react';

import Test from './page';
import RootLayout from '../layout'
import TestLayout from './layout'

const meta: Meta<typeof Test> = {
  title: 'app/Test',
  component: Test,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Test>;

export const WithoutLayout: Story = {
  render: () => <Test />
};

export const WithSidebar: Story = {
  render: () => (
    <RootLayout>
      <TestLayout>
        <Test />
      </TestLayout>
    </RootLayout>
  )
};
