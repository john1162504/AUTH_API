import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
    <T>(schema: z.ZodType<T>) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        //todo: improve error message
        if (!result.success) {
            return res.status(400).json({
                errors: result.error,
            });
        }

        req.body = result.data;
        next();
    };
