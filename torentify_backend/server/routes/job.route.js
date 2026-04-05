import { Router } from "express";
import {
  createJob,
  getJobs,
  getJobById,
  deleteJobById,
  deleteAllJobs
} from "../controller/job.controller.js";
import multer from "multer";

const router = Router();
const upload = multer();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job Management APIs
 */

/**
 * @swagger
 * /api/jobs/postJobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - companyName
 *               - location
 *               - country        # ✅ NEW
 *               - jobType        # ✅ NEW
 *               - description
 *               - applyUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: Frontend Developer
 *               companyName:
 *                 type: string
 *                 example: Google
 *               location:
 *                 type: string
 *                 example: Bangalore
 *               country:          # ✅ NEW
 *                 type: string
 *                 example: India
 *               jobType:          # ✅ NEW
 *                 type: string
 *                 enum: [Full-time, Part-time, Remote, Internship, Contract]
 *                 example: Full-time
 *               description:
 *                 type: string
 *                 example: React developer with 2+ years experience
 *               applyUrl:
 *                 type: string
 *                 format: uri
 *                 example: https://company.com/apply
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/postJobs", upload.none(), createJob);


/**
 * @swagger
 * /api/jobs/getJobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of jobs
 */
router.get("/getJobs", getJobs);

/**
 * @swagger
 * /api/jobs/getJobById/{id}:
 *   get:
 *     summary: Get job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job fetched successfully
 *       404:
 *         description: Job not found
 */
router.get("/getJobById/:id", getJobById);


/**
 * @swagger
 * /api/jobs/deleteById/{id}:
 *   delete:
 *     summary: Delete job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */
router.delete("/deleteById/:id", deleteJobById);

/**
 * @swagger
 * /api/jobs/deleteAll:
 *   delete:
 *     summary: Delete all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: All jobs deleted
 */
router.delete("/deleteAll", deleteAllJobs);

export default router;
