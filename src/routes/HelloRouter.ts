import express, { Request,Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";


// Router from express
let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Juan/
helloRouter.route('/')
    //GET
    .get(async (req: Request, res: Response) => {
        //Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        //Controller Instance to execute method
        const controller : HelloController = new HelloController();
        //Obtain the response from the controller
        const response = await controller.getMessage(name);
        //Send the response
        return res.send(response);
    });

//Export the Router
export default helloRouter;
    

