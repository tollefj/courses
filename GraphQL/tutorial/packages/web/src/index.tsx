import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_API_URL
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
