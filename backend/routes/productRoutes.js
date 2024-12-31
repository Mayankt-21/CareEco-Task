const express = require("express");
const router = express.Router();

// Controller functions
const {
  getAllProducts,
  getProductById,
  searchProducts,
} = require("../controllers/productController");

// Routes
router.get("/", getAllProducts); // Endpoint: GET /api/products/
router.get("/:id", getProductById); // Endpoint: GET /api/products/:id
router.get("/search", searchProducts);

module.exports = router;
