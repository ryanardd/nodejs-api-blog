import express from "express";
import { publicRoute } from "../router/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { route } from "../router/api.js";
import dotenv from "dotenv";

dotenv.config();

export const app = express();
app.use(express.json());

app.use(publicRoute);
app.use(route);

app.use(errorMiddleware);
