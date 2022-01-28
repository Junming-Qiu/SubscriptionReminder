import express, { Request, Response } from 'express';
import cors from "cors";
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';


const main = async () => {

  // await createConnection({
  //   type: "mysql",
  //   database: "", //Database Name
  //   username: "",
  //   password: "",
  //   logging: true,
  //   synchronize: false, //determine if make tables automatically or not 
  //   entities: [] //entities for
  // })

  const app = express();
  const port = 3001;

  //Cors middleware allows for frontend to recieve information from url other than its own
  app.use(cors({origin: "http://localhost:3000/"}))
  //parse all incoming JSON payloads into objects
  app.use(express.json())

  //Apply graphql middleware
  // app.use("/graphql", graphqlHTTP({
  //   schema,
  //   graphiql: true
  // }))

  //start server on port 
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });



  app.get('/', (req:Request, res:Response) => {
    res.send('Hello World')
  })

}

//run and catch if error
main().catch((err) => {
  console.log(err);
})









// const port = 3002;

// const app = express()

