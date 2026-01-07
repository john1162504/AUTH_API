import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./routes/UserRoutes";
import { errorHandler } from "./middlewares/ErrorHandler";

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", UserRoutes);
app.use(errorHandler);

app.get("/health", (_, res) => {
    res.json({ status: "ok" });
});

export { app };
