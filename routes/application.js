import express from "express";
const router = express.Router();
import { apply,deleteApplication }from '../controllers/application.controller'

router.post(
  "/apply",apply
);
router.get(
  "/delete/:id",deleteApplication
);
module.exports = router;
