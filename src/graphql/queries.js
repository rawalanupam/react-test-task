
import { gql } from 'graphql-tag';


export const GET_CARDS = gql`
  query Cards($order: String!, $page: Int!, $itemsPerPage: Int!, $category: String) {
    cards(
      sort: { field: "name", order: $order },
      pagination: { itemsPerPage: $itemsPerPage, page: $page },
      filters: { category: $category }
    ) {
      category
      description
      dexId
      effect
      energyType
      evolveFrom
      hp
      id
      illustrator
      image
      level
      localId
      name
      rarity
      regulationMark
      retreat
      stage
      suffix
      trainerType
      types
    }
  }
`;