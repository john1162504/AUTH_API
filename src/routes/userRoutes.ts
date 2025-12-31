import { Router } from "express";
import {
    registerUser,
    loginUser,
    getUserInfo,
    updateUser,
    deleteUser,
} from "../controllers/UserController";
import { validate } from "../middlewares/Validator";
import { RegisterSchema, LoginSchema } from "../schemas/user.schema";
import { userService } from "../services/userServiceImpl";

const router = Router();

router.post("/register", validate(RegisterSchema), registerUser(userService));
router.post("/login", validate(LoginSchema), loginUser(userService));
router.get("/me", getUserInfo);
router.put("/me", updateUser);
router.delete("/me", deleteUser);

export default router;
