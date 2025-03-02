const express = require("express");
const multer = require("multer");
const { protectRoute } = require("../middlewares/authMiddleware");
const {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} = require("../controllers/messageControllers");

const router = express.Router();

// Configure Multer for File Uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage }); // Initialize multer

// Routes
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, upload.single("image"), sendMessage); // Apply multer middleware

module.exports = router;
