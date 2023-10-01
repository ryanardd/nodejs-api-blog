import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "event",
            level: "warn",
        },
    ],
});

prismaClient.$on("error", (e) => {
    logger.info(e);
});

prismaClient.$on("info", (e) => {
    logger.info(e);
});

prismaClient.$on("query", (e) => {
    logger.info(e);
});

prismaClient.$on("warn", (e) => {
    logger.info(e);
});

export { prismaClient };
