"use client"

import { HomePage as HomeImpl } from './Home'
import { useRestaurantsQuery } from '@/usecases/restaurants'
import { BasicCardProps } from '@/components/ui/card/BasicCard/BasicCard'

export const HomePage = () => {
  const { loading, error, data, pagination } = useRestaurantsQuery()

  if (error) return <main>Error</main>
  if (loading) return <main>Loading...</main>
  if (pagination?.total && pagination.total === 0) return <main>Nodata found</main>
  if (data && data.length === 0) return <main>Nodata found</main>

  console.log('data', data)

  const cards: BasicCardProps[] = data.map((d) => ({
    category: d.categories ? categoriesMap(d.categories) : '',
    name: d.name,
    description: d.description || ''
  }))

  return <HomeImpl data={cards} />
}

export default HomePage

const categoriesMap = (categories: any[]) => {
  return categories.map((d) => d.name).join(',')
}
