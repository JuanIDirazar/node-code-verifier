import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "@/utils/logger";

//CRUD
/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
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
export const getUserByID = async (id: string): Promise<any[] | null | undefined> => {
    try {
        let userModel = userEntity();
        //Search user By Id
        return await userModel.findById(id);

    } catch (error) {
        LogError(`[ORM ERROR]:  Getting User by ID: ${error}}`);
    }
}


// - GET user by email
// - DELETE user by ID
// - Create new user
// - Update user by ID