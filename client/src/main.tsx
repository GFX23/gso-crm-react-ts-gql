import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import typeDefs from "./graphql/typeDefs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const url = import.meta.env.VITE_GRAPHQL_ENDPOINT

console.log(url);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: url,
  typeDefs,
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
