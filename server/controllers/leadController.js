const Lead = require("../models/Lead");

// Create Lead
const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    const lead = await Lead.create({
      name,
      email,
      budget,
      message,
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Lead
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Lead Status
const updateLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    if (lead.status === "New") {
      lead.status = "Contacted";
    } else if (lead.status === "Contacted") {
      lead.status = "Closed";
    } else {
      lead.status = "New";
    }

    await lead.save();

    res.json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  deleteLead,
  updateLeadStatus,
};