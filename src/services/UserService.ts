import { User } from "../../generated/prisma/client";
import { RegisterInput } from "../schemas/UserSchema";

export interface UserService {
    register(data: RegisterInput): Promise<User>;
}
