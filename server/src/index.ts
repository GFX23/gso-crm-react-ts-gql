import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import Resolvers from "./graphql/resolvers";
import Schema from "./graphql/schema";
import { connectToServer } from "./mongobase/mongoDB";
import express from "express";
import http from "http";


async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;

  connectToServer((err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>(
    (resolve) => httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`
  ██████╗ ███████╗ ██████╗   ██████╗██████╗ ███╗   ███╗
 ██╔════╝ ██╔════╝██╔═══██╗ ██╔════╝██╔══██╗████╗ ████║
 ██║  ███╗███████╗██║   ██║ ██║     ██████╔╝██╔████╔██║
 ██║   ██║╚════██║██║   ██║ ██║     ██╔══██╗██║╚██╔╝██║
 ╚██████╔╝███████║╚██████╔╝ ╚██████╗██║  ██║██║ ╚═╝ ██║
  ╚═════╝ ╚══════╝ ╚═════╝   ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝
=======================================================
GSO CRM Server Initialization:
- Express server: Listening on port http://localhost:4000${server.graphqlPath} !
- Apollo Server: GraphQL integration complete
- MongoDB Connection: REPORT BELLOW
- Environment: [Development]
- Timestamp: ${new Date().toISOString()}

Server is fully operational and ready to manage customer relations!
`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);
