import express, {Express,Request,Response} from "express";

//Environment Variables
import dotenv from "dotenv";
//Security
import cors from 'cors';
import helmet from 'helmet';

//TODO HTTPS

//Root Routes
import routes from '../routes';
import server from "../routes";
import rootRouter from '../routes'; // Import the rootRouter variable from the '../routes' file

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
//From this point onover: http://localhost:8000/api/...

server.use(
    '/api',
    rootRouter
    );
//TODO Mongoose Connection

//Security Config
server.use(helmet());
server.use(cors()); 

// Content Type Config:
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

//Redirection Config
// http://localhost:8000/   --> http://localhost:8000/api
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
})

export default server;
