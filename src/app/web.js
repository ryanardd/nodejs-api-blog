import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { route } from "../router/api.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();
export const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use(route);

app.use(errorMiddleware);
