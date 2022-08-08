import express from "express";
const router = express.Router();
import { signup }from '../controllers/auth.controller'

router.post(
  "/signup",signup
);

module.exports = router;
