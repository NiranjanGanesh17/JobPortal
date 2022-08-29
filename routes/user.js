import express from "express";
const router = express.Router();
import { appliedJobs }from '../controllers/user.controller'

router.get(
  "/",appliedJobs
);

module.exports = router;
