import { Router } from "express";
import {
    registerUser,
    loginUser,
    getUserInfo,
    updateUser,
    deleteUser,
} from "../controllers/UserController";
import { validate } from "../middlewares/validator";
import { RegisterSchema } from "../schemas/user.schema";

const router = Router();

router.post("/register", validate(RegisterSchema), registerUser);
router.post("/login", loginUser);
router.get("/me", getUserInfo);
router.put("/me", updateUser);
router.delete("/me", deleteUser);

export default router;
