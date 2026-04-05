import { Router } from "express";

import authRoutes from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.routes.js";
import jobRoutes from "./routes/job.route.js";
import contactRoutes from "./routes/contact.route.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);
router.use("/jobs", jobRoutes);
router.use("/contact", contactRoutes);

export default router;
