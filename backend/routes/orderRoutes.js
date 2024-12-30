const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// Controller functions
const {
  createOrder,
  getOrderById,
  cancelOrder,
} = require("../controllers/orderController");

// Routes
router.post("/", authMiddleware, createOrder); // Endpoint: POST /api/orders/
router.get("/:id", authMiddleware, getOrderById); // Endpoint: GET /api/orders/:id
router.delete("/:id", authMiddleware, cancelOrder); // Endpoint: DELETE /api/orders/:id

module.exports = router;
