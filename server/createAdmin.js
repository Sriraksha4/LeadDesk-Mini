const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const Admin = require("./models/Admin");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to:", mongoose.connection.name);

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.deleteMany({});

    const admin = await Admin.create({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    console.log("Created Admin:", admin);

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });