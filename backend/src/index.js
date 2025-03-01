const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./lib/db");
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
