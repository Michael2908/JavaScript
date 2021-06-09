const express = require("express");
const serverService = require("./services/serverService");
serverService.startServer();
const app = serverService.getServer();
const calcRouter = require("./Backend/calc");
app.use(express.static("public"));
app.use("/", calcRouter);
