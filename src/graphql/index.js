import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'https://api.tcgdex.net/v2/graphql',
  cache: new InMemoryCache(),
});
