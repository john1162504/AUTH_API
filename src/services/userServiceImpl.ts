import { UserService } from "./UserService";
import { prisma } from "../lib/prisma";
import { hashPassword } from "../utils/encryptor";
import { ConflictError } from "../errors/ConflictError";

export const userService: UserService = {
    async register(data) {
        const existing = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existing) {
            throw new ConflictError("User with this email already exists");
        }

        const hashedPassword = await hashPassword(data.password);

        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
            },
        });

        return newUser;
    },
};
