import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { route } from "../router/api.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import multer from "multer";
import { fileFilter, filterStorage } from "../service/upload-image.js";
import cors from "cors";

dotenv.config();
export const app = express();
app.use(
    cors({
        // localhost fe
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "DELETE", "PATCH"],
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.json());
app.use("/images/", express.static("public/image"));
app.use(cookieParser());
app.use(
    multer({
        storage: filterStorage,
        fileFilter: fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 },
    }).single("image")
);

app.use(route);

app.use(errorMiddleware);
