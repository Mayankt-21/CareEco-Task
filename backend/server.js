const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to MyOwnStore backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
