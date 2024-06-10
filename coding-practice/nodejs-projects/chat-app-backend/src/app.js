const express = require("express");
require("dotenv").config();

const authRoute = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);

module.exports = app;
