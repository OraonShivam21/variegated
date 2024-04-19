import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const body = req.body;
  const message = `
  <h1>Your band name is:</h1>
  <p style="font-size: 1.2rem;">${body.street}${body.pet}</p>
  `;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
