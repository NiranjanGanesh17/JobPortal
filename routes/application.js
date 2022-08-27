import express from "express";
const router = express.Router();
import { apply }from '../controllers/application.controller'

router.post(
  "/apply",apply
);

module.exports = router;
