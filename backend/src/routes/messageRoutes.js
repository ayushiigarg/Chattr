const express = require("express");
const { protectRoute } = require("../middlewares/authMiddleware");
const {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} = require("../controllers/messageControllers");

const router = express.Router();

// Routes
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
