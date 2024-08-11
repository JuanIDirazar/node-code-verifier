import express, { Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

// Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users/
usersRouter.route('/')
    //GET
    .get(async (req: Request, res: Response) => {
        //Obtain a Query Param(ID)
        let id:any = req?.query?.id;
        LogInfo(`[GET] - Query Param ID: ${id}`);   
        //Controller Instance to execute method
        const controller : UserController= new UserController();
        //Obtain the response from the controller
        const response = await controller.getUsers();
        //Send the response
        return res.send(response);
    });

//Export the Router
export default usersRouter;
    

