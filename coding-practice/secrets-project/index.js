//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const password = req.body.password;
  try {
    if (password === "ILoveProgramming")
      res.sendFile(__dirname + "/public/secret.html");
    else res.sendFile(__dirname + "/public/index.html");
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
