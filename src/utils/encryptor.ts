import bcrypt from "bcrypt";

const SALT_ROUNDS = 5;

async function hashPassword(plainPassword: string): Promise<string> {
    const hashed = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hashed;
}

export { hashPassword };
