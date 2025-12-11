const express = require("express");
const {
  addLead,
  getAllLeads,
  deleteLead,
  getLeadById,
  editLead
} = require("../controllers/lead.controller");

const router = express.Router();

router.post("/add", addLead);
router.get("/all", getAllLeads);
router.delete("/delete/:id", deleteLead);
router.get("/single/:id", getLeadById);
router.put("/edit/:id", editLead);

module.exports = router;
