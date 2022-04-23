import React from 'react';

// import Factura from './components/Factura';
import CreateFactura from './components/CreateFactura';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import FacturaGraphQL from './components/FacturaGraphQL';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CreateFactura />
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
