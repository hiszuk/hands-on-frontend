import { BasicCardProps } from '@/components/ui/card/BasicCard/BasicCard'
import { BasicCards } from '@/components/ui/card/BasicCards/BasicCards'

export const HomePage = ({
  data
}: {
  data?: BasicCardProps[] | undefined
}) => {
  return (
    <main>
      <BasicCards data={data || []} />
    </main>
  )
}
