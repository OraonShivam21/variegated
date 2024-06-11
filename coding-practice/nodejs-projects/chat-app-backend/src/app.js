const express = require("express");
require("dotenv").config();

const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

module.exports = app;
