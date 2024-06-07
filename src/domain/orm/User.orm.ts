import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "@/utils/logger";

//CRUD
/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();
        //Search all users<
        return await userModel.find({isDeleted: false});

    } catch (error) {
        LogError(`[ORM ERROR]:  Getting All Users: ${error}}`);
    }
}

// TODO
// - GET user by ID
// - GET user by email
// - DELETE user by ID
// - Create new user
// - Update user by ID