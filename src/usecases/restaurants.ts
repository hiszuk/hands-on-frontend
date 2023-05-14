// "use client"
import { useQuery } from '@apollo/client'
import { restaurantsQueryDocument } from '../repositories/graphql/Restaurants'

type CategoryType = {
  id: string
  name: string
}

type RestaurantType = {
  id: string
  name: string
  description?: string | null | undefined
  categories?: CategoryType[] | null | undefined
}

type PaginationType = {
  page: number
  pageSize: number
  total: number
}

export const useRestaurantsQuery = () => {
  const { loading, error: queryError, data: result} = useQuery(restaurantsQueryDocument)

  let error: string | undefined = undefined
  if (queryError) error = `Something wrong, ${queryError?.message}`

  let pagination: PaginationType | undefined = undefined
  let data: RestaurantType[] = []
  if (result?.restaurants?.__typename) {
    result.restaurants?.data.forEach((d) => {
      const rec: RestaurantType = {
        id: d.id as string,
        name: d.attributes?.name || '',
        description: d.attributes?.description,
        categories: d.attributes?.categories?.data.map((c) => ({
          id: c.id as string,
          name: c.attributes?.name as string
        }))
      }
      if (rec) data.push(rec)
    })

    pagination = {
      page: result.restaurants?.meta.pagination.page || 0,
      pageSize: result.restaurants?.meta.pagination.pageSize || 0,
      total: result.restaurants?.meta.pagination.total || 0,
    }
  }

  return {
    loading,
    error,
    data,
    pagination,
  }
}