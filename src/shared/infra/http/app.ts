import "reflect-metadata";
import "dotenv/config"
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "../database"
import "../../container"
import upload from "../../../config/upload"
import { AppError } from "../../errors/AppError";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/images", express.static(`${upload.tmpFolder}/imagesUrl`));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`,
    });
});

export { app }
