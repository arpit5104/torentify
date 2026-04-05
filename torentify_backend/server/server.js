// server/server.js

import "dotenv/config"; // 🔥 MUST BE FIRST

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import apiRoutes from "./api.js";
import swaggerSpec from "./common/swagger.js";
import db from "./models/index.js";

const app = express();
const port = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= ROUTES ================= */
app.use("/api", apiRoutes);

/* ================= SWAGGER ================= */
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ================= DB CONNECTION ================= */
let isDbConnected = false;

const connectDB = async () => {
  if (isDbConnected) return;

  try {
    await db.sequelize.authenticate();
    console.log("✅ Database connected");

    await db.sequelize.sync();
    console.log("✅ Tables synced");

    isDbConnected = true;
  } catch (err) {
    console.error("❌ DB error:", err);
  }
};

connectDB();

/* ================= LOCALHOST ONLY ================= */
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

/* ================= VERCEL EXPORT ================= */
export default app;
