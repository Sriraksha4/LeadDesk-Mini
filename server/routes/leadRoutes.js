const express = require("express");
const router = express.Router();


const {
  createLead,
  getLeads,
  deleteLead,
  updateLeadStatus,
} = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", getLeads);
router.delete("/:id", deleteLead);
router.patch("/:id/status", updateLeadStatus);


module.exports = router;