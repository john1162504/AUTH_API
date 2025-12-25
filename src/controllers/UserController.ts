import { Request, Response } from "express";
import { UserService } from "../services/UserService";

//register user
const registerUser =
    (userService: UserService) => async (req: Request, res: Response) => {
        const newUser = await userService.register(req.body);
        return res.status(201).json(newUser.id);
    };

//login user
const loginUser = (req: Request, res: Response) => {
    try {
    } catch (error) {}
};

//get user info
const getUserInfo = (req: Request, res: Response) => {
    try {
    } catch (error) {}
};

//update user info
const updateUser = (req: Request, res: Response) => {
    try {
    } catch (error) {}
    ``;
};

//delete user account
const deleteUser = (req: Request, res: Response) => {
    try {
    } catch (error) {}
};

export { registerUser, loginUser, getUserInfo, updateUser, deleteUser };
