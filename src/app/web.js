import express from "express";
import { route } from "../router/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const app = express();
app.use(express.json());

app.use(route);

app.use(errorMiddleware);
