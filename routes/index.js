const router = require("express").Router();

// Import API routes from /api/index.js
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("incorrect API route provided");
});

module.exports = router;
