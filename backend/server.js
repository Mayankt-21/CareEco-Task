const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // Optional: For enabling Cross-Origin Resource Sharing
const authMiddleware = require("./middleware/auth"); // Import auth middleware if needed globally

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // If you want to allow cross-origin requests (configure as needed)

// Routes
app.use("/api/users", require("./routes/userRoutes")); // User routes (e.g., register, login)
app.use("/api/products", require("./routes/productRoutes")); // Product routes (e.g., get products)
app.use("/api/orders", authMiddleware, require("./routes/orderRoutes")); // Order routes with auth middleware for protection

// Optional: You can add a 404 route for undefined endpoints
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
