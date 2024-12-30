const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// Controller functions (define these in a separate file for better modularity)
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");

// Routes
router.post("/register", registerUser); // Endpoint: POST /api/users/register
router.post("/login", loginUser); // Endpoint: POST /api/users/login
router.get("/profile", authMiddleware, getUserProfile); // Endpoint: GET /api/users/profile

module.exports = router;
