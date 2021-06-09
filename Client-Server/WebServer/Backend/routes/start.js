const express = require("express");
const router = express.Router();
const { getM, zerofiy } = require("../services/numberService");

router.post("/start", (req, res) => {
  zerofiy();
  res.send({ data: getM() });
});

module.exports = router;
