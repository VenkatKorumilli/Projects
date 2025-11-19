var mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  courseInterested: String,
  status: {
    type: String,
    enum: ["New", "Contacted", "Enrolled", "Rejected"],
    default: "New",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var LeadsModel = mongoose.model("lead", leadSchema);

module.exports = LeadsModel;
