const express = require("express");
const router = express.Router();
const calcRouter = require("./routes/calc");
const startRouter = require("./routes/start");
router.use("/calc", calcRouter);
router.use("/", startRouter);

router.use((req, res) => {
  res.sendStatus(404);
});

module.exports = router;
