const express = require("express");
const router = express.Router();

// Define your routes
router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
