require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
require("./cron/tasklogger");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


