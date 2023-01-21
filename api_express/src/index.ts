import { Category, PrismaClient, Task } from "@prisma/client";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import { createLogMiddleware, nameInjectionMiddleware } from "./middleware";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(createLogMiddleware);
app.use(nameInjectionMiddleware({ name: "DONE!✅" }));

routes(app);

app.listen(3001, () =>
  console.log("REST API server ready at: http://localhost:3001")
);
