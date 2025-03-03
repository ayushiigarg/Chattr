const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const { connectDB } = require("./lib/db");
const { app, server } = require("./lib/socket");
dotenv.config();

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const PORT = process.env.PORT || 5001;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
