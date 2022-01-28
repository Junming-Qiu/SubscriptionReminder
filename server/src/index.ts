import "reflect-metadata";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import express, { Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";

// import { RegisterResolver } from "./modules/user/Register";



const main = async () => {
  const port = 3001;

  
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  //Cors middleware allows for frontend to recieve information from url other than its own
  app.use(cors())

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log("server started on http://localhost:3001/graphql");
  });

  app.get('/', (req:Request, res:Response) => {
    res.send('Hello World')
  })

};

//run and catch if error
main().catch((err) => {
  console.log(err);
})


// import express, { Request, Response } from 'express';

// import cors from "cors";
// import { graphqlHTTP } from 'express-graphql';
// import { createConnection } from 'typeorm';
// import {schema} from "./Schema";
// import {Users} from "./Entities/Users"

// const main = async () => {

//   await createConnection({
    // type: "mysql",
    // database: "Subscriptions",
    // username: "root",
    // password: "Password.1234",
    // logging: true,
    // synchronize: false, //determine if make tables automatically or not 
    // entities: [Users] //entities for
//   })

//   // [{firstname: 'Kevin', lastname: 'wu'}]

//   // user 
//   // first Name
//   // last name

//   const app = express();

  // //Cors middleware allows for frontend to recieve information from url other than its own
  // app.use(cors({origin: "http://localhost:3000/"}))
  
//   //parse all incoming JSON payloads into objects
//   app.use(express.json())

//   //Apply graphql middleware
//   app.use("/graphql", graphqlHTTP({
//     schema,
//     graphiql: true
//   }))

//   //start server on port 
//   app.listen(port, () => {
//     console.log(`SERVER RUNNING ON PORT ${port}`);
//   });



  // app.get('/', (req:Request, res:Response) => {
  //   res.send('Hello World')
  // })

// }

// //run and catch if error
// main().catch((err) => {
//   console.log(err);
// })
