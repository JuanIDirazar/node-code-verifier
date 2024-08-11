/*
*Root Router
*Redirections to Routers
*/

import express, {Request, Response} from "express";
import helloRouter from "../routes/HelloRouter";
import { LogInfo } from "../utils/logger";
import usersRouter from "./UserRouter";

// Server Instance
let server = express();

// Router Instance
let rootRouter = express.Router();

// Active for requests to http://localhost:8000/api

//GET http://localhost:8000/api/
rootRouter.get('/', (req: Request, res:Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    // Send Hello World
    res.send('Welcome to API Restful: Express + Nodemon + Jest + TS + Swagger + Mongoose');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter);        //http://localhost:8000/api
server.use('/hello', helloRouter);  //http://localhost:8000/api/hello --> HelloRouter
//Add more redirections here
server.use('/users', usersRouter);  //http://localhost:8000/api/users --> UserRouter    



export default server;