import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import FacturaGraphQL from './components/FacturaGraphQL';
import CreateFacturaGraphQL from './components/CreateFacturaGraphQL';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CreateFacturaGraphQL />
        <FacturaGraphQL />
      </div>
    </ApolloProvider>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Factura />
//       <CreateFactura />
//     </>
//   );
// }

// export default App;
