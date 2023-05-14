import type { Meta, StoryObj } from '@storybook/react'

import { HomePage } from './Home'
import { BasicCardProps } from '@/components/ui/card/BasicCard/BasicCard'

const data: BasicCardProps[] = [
  {
    category: 'イタリア料理',
    name: 'La Passo',
    description: '橿原市にひっそりと店を構える落ち着いた雰囲気のイタリア料理店。夜は間接照明とキャンドルで大人っぽく。おすすめはマルゲリータピザのチーズ増量。ふたりでシェアしてもちょうど良い大きさです。'
  },
  {
    category: '中国料理',
    name: '桃源郷',
    description: '庶民派の中華料理店。ひとりメシでも十分。おすすめは中華ランチ。唐揚げ・酢豚・餃子・チャーパンで大満足！'
  },
  {
    category: '日本料理',
    name: '味彩館',
    description: '和食全般。おすすめはちゃんこ鍋。季節の野菜と豚肉を醤油だしで煮込んだ逸品'
  },
  {
    category: 'アドリア料理',
    name: 'エル・ブリ',
    description: '新鮮な魚介類を使った味はイタリア料理に近いがあっさりした味わいです。'
  },
]

const meta: Meta<typeof HomePage> = {
  title: 'components/pages/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>

export const Default: Story = {}

export const Sample: Story = {
  args: {
    data: data
  }
}
