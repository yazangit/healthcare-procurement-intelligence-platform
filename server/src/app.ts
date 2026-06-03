import cors from "cors";
import express from "express";

import { procurementRouter } from "./routes/procurementRoutes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "healthy",
    service: "Healthcare Procurement API",
  });
});

app.use("/api", procurementRouter);
