import supertest from "supertest";
import { app } from "../src/app/web";
import { logger } from "../src/app/logging";

describe("/api/user/register", () => {
    it("should can register new user", async () => {
        const result = await supertest(app).post("/api/user/register/").send({
            name: "test",
            username: "user",
            email: "test@gmail.com",
            password: "rahasia",
        });

        logger.info(result.body);

        expect(result.status).toBe(404);
    });
});
