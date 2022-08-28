import express from "express";
const router = express.Router();
import { apply,deleteApplication,getStatus }from '../controllers/application.controller'

router.post(
  "/apply",apply
);
router.get(
  "/delete/:id",deleteApplication
);
router.get(
  "/status/:id",getStatus
);
module.exports = router;
