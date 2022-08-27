import express from "express";
const router = express.Router();
import { searchJobs }from '../controllers/job.controller'

router.post(
  "/search",searchJobs
);

module.exports = router;
