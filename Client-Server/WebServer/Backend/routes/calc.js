const express = require("express");
const router = express.Router();
const { closeServer } = require("./../../services/serverService");
const {
  zerofiy,
  getM,
  add,
  sub,
  multiply,
  divide,
} = require("./../services/numberService");

router.post("/add/:num", (req, res) => {
  try {
    const params = parseInt(req.params["num"]);
    add(params);
    if (!isFinite(getM())) res.sendStatus(500);
    res.send({ data: getM() });
  } catch {
    res.sendStatus(500);
  }
});

router.post("/sub/:num", (req, res) => {
  try {
    const params = parseInt(req.params["num"]);
    sub(params);
    if (!isFinite(getM())) res.sendStatus(500);
    res.send({ data: getM() });
  } catch {
    res.sendStatus(500);
  }
});

router.put("/multiply/:num", (req, res) => {
  try {
    const params = parseInt(req.params["num"]);
    multiply(params);
    if (!isFinite(getM())) res.sendStatus(500);
    res.send({ data: getM() });
  } catch {
    res.sendStatus(500);
  }
});

router.put("/divide/:num", (req, res) => {
  try {
    const params = parseInt(req.params["num"]);
    divide(params);
    if (!isFinite(getM()) || getM() === 0) res.sendStatus(500);
    res.send({ data: getM() });
  } catch {
    res.sendStatus(500);
  }
});

router.get("/M", (req, res) => {
  try {
    res.send({ data: getM() });
  } catch {
    res.sendStatus(500);
  }
});

router.delete("/del", (req, res) => {
  res.send({ data: "Shutting down Server" });
  closeServer();
});

router.post("/reset", (req, res) => {
  zerofiy();
  res.send({ data: getM() });
});

module.exports = router;
