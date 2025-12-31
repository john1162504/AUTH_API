import { User } from "../../generated/prisma/client";
import { LoginInput, PublicUser, RegisterInput } from "../schemas/user.schema";

export interface UserService {
    register(data: RegisterInput): Promise<PublicUser>;
    login(data: LoginInput): Promise<{ token: string; user: PublicUser }>;
}
