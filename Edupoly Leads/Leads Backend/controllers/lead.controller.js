const LeadsModel = require("../models/leads.model");

exports.addLead = async (req, res) => {
  try {
    const newLead = new LeadsModel(req.body);
    await newLead.save();
    res.json({ msg: "Lead added successfully" });
  } catch (e) {
    res.json({ msg: "Error adding lead" });
  }
};

exports.getAllLeads = async (req, res) => {
  const data = await LeadsModel.find();
  res.json({ data });
};

exports.deleteLead = async (req, res) => {
  const data = await LeadsModel.findByIdAndDelete(req.params.id);
  res.json({ data });
};

exports.getLeadById = async (req, res) => {
  const data = await LeadsModel.findById(req.params.id);
  res.json({ data });
};

exports.editLead = async (req, res) => {
  const data = await LeadsModel.findByIdAndUpdate(req.params.id, req.body);
  res.json({ data });
};
