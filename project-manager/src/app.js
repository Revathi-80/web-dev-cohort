import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

// router imports
import healthCheckRouter from "./routes/healthcheck.routes.js";
import userRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
    cors({
      origin: process.env.BASE_URL,
      credentials: true,
      methods: ["GET", "POST", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/users", userRoutes);


export default app;
