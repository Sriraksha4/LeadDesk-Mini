const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);

app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
  res.send("LeadDesk Mini API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});