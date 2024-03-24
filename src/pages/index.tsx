import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ParkingList }  from '../component/ParkingList';

const Apolloclient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


const Home: React.FC = () => {
  return (
    <ApolloProvider client={Apolloclient}>
      <ParkingList />
    </ApolloProvider>
  );
}

export default Home;