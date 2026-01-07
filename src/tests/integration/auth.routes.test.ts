import request from "supertest";
import { app } from "../../app";
import { prisma } from "../../lib/prisma";

describe("Auth routes", () => {
    beforeAll(async () => {
        await prisma.user.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("registers a new user:", async () => {
        const res = await request(app).post("/api/users/register").send({
            name: "Test User",
            email: "test@example.com",
            password: "password123",
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
    });
});
