import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application route
app.use("/api/v1/students", studentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

export default app;
