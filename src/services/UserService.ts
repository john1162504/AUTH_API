import { User } from "../../generated/prisma/client";
import { RegisterInput } from "../schemas/user.schema";

export interface UserService {
    register(data: RegisterInput): Promise<User>;
}
