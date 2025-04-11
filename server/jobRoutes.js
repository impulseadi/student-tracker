import express from "express";
import Job from "./jobModel.js";

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add job
router.post("/", async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).json(newJob);
});

// Update job status
router.patch("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(job);
});

// Delete job
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
