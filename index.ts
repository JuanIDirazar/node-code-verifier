import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();
//Create Express App
const app: Express = express();
const port= process.env.PORT || 8000;

// Define the first rout of app
app.get('/', (req: Request, res:Response) => {
    res.send('Welcome to API Restful: Express + Nodemon + Jest + TS + Swagger + Mongoose');
});

//Execute app and Listen Requests to the PORT
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));

