// import express from "express";
// import morgan from "morgan";
// import bodyParser from "body-parser";
// import fs from "fs";
// import path from "path";

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const logStream = fs.createWriteStream(
  path.join(__dirname, "combined_log.txt"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: logStream }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Home" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "About" });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Contact", body: req.body });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
