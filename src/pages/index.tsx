import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import ParkingList from './ParkingList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


const Home: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ParkingList />
    </ApolloProvider>
  );
}

export default Home;