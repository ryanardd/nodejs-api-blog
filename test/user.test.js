import supertest from "supertest";
import { app } from "../src/app/web";
import { logger } from "../src/app/logging";

describe("/api/user/register", () => {
    it("should can register new user", async () => {
        const result = await supertest(app).post("/api/user/login/").send({
            username: "user",
            password: "rahasia",
        });

        logger.info(result.body);

        expect(result.status).toBe(200);
    });
});
