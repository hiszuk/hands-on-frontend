import { BasicCardProps, BasicCard } from '@/components/ui/card/BasicCard/BasicCard'

export const BasicCards = ({ data = [] }: { data: BasicCardProps[] }) => {
  if (!data || data.length === 0) return <NoData />

  return (
    <div className="flex flex-wrap m-2">
      {data.map((rec, index) => (
        <BasicCard key={index} {...rec} />
      ))}
    </div>
  )
}

const NoData = () => {
  return (
    <div className="h-full my-20 flex justify-center items-center">
      <h1>NO DATA FOUND</h1>
    </div>
  )
}
