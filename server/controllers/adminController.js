const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Email Entered:", email);
    console.log("Password Entered:", password);

    const admin = await Admin.findOne({ email });

    console.log("Admin Found:", admin);

    if (!admin) {
      return res.status(401).json({
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    console.log("JWT Secret:", process.env.JWT_SECRET);

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
};