import { BasicResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string): Promise <BasicResponse>
}

export interface IUserController {

    // Read all users from database || get User By ID
    getUsers(id?: String): Promise <any>;

}    