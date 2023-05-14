import { graphql } from '../../gql'

export const restaurantsQueryDocument = graphql(`
  query Restaurants {
    restaurants {
      data {
        id
        attributes {
          name
          description
          categories {
            data {
              id
              attributes {
                  name
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`);
