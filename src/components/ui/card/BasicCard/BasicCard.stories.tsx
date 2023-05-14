import type { Meta, StoryObj } from '@storybook/react'

import { BasicCard } from './BasicCard'

const meta: Meta<typeof BasicCard> = {
  title: 'components/ui/BasicCard',
  component: BasicCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicCard>

export const Default: Story = {}

export const Sample: Story = {
  args: {
    category: 'イタリア料理',
    name: 'La Passo',
    description: '橿原市にひっそりと店を構える落ち着いた雰囲気のイタリア料理店。夜は間接照明とキャンドルで大人っぽく。おすすめはマルゲリータピザのチーズ増量。ふたりでシェアしてもちょうど良い大きさです。'
  },
}
