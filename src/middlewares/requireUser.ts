import { UnauthorisedError } from "../errors/UnauthorisedError";
import { Request } from "express";

export function requireUser(
    req: Request
): asserts req is Request & { user: NonNullable<Express.Request["user"]> } {
    if (!req.user) {
        throw new UnauthorisedError("Unauthenticated");
    }
}
