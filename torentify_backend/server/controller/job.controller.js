import db from "../models/index.js";

const { Job } = db;

// ✅ CREATE JOB (applicantCount NOT used)
export const createJob = async (req, res) => {
  try {
    const { title, companyName, location, description, applyUrl, country, jobType } = req.body;

    if (!title || !companyName || !location || !description || !applyUrl || !country || !jobType) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const job = await Job.create({
      title,
      companyName,
      location,
      description,
      applyUrl,
      country,
      jobType
    });

    res.status(201).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// ✅ GET ALL JOBS (ALL FIELDS RETURNED)
export const getJobs = async (req, res) => {
  const jobs = await Job.findAll();
  res.status(200).json({
    success: true,
    data: jobs
  });
};

// ✅ GET JOB BY ID
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("detail from params", id);
    
    const job = await Job.findByPk(id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ DELETE JOB BY ID
export const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Job.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ DELETE ALL JOBS
export const deleteAllJobs = async (req, res) => {
  try {
    await Job.destroy({
      where: {},
      truncate: true,
    });

    res.status(200).json({ message: "All jobs deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
