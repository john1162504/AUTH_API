import jwt from "jsonwebtoken";

const JWT_EXPIRES_IN = "1h";

export type JwtPayload = {
    userId: number;
};

function getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    return secret;
}

export const signToken = (payload: JwtPayload): string => {
    return jwt.sign(payload, getJwtSecret(), {
        expiresIn: JWT_EXPIRES_IN,
    });
};

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, getJwtSecret()) as JwtPayload;
};
