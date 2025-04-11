import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./jobRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running ✅");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
