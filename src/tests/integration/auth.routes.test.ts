import request from "supertest";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { app } from "../../app";
import { getPrisma } from "../../lib/prisma";

describe("Auth routes", () => {
    beforeAll(async () => {
        const prisma = getPrisma();

        await prisma.user.deleteMany();
    });

    afterAll(async () => {
        const prisma = getPrisma();

        await prisma.$disconnect();
    });

    it("registers a new user:", async () => {
        console.log("Using database:", process.env.DATABASE_URL);
        const res = await request(app).post("/api/users/register").send({
            name: "Test User",
            email: "test@example.com",
            password: "password123",
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
    });
});
