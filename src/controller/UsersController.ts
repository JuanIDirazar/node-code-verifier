import { Get , Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess , LogError } from "../utils/logger";


//ORM - Users Collection
import { getAllUsers, getUserByID } from "../domain/orm/User.orm";
import { BasicResponse } from "./types";

interface ExtendedBasicResponse extends BasicResponse {
    status: string;
    data: any;
    message: string;
}

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {

    /**
     * Endpoint to retrieve the Users in the Collection "Users" of DB
     */
    @Get("/")
    public async getUsers(@Query()id?: String): Promise<any> {

        let response : any = '';

        if(id){
            return{
                message: `Obtaining User by ID: ${id}`,
            }
        } else {
            LogSuccess(`[api/users] - Getting All Users`);
            response = await getAllUsers();
        }

        return response;
    }
}