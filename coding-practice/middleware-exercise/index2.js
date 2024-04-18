import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("combined"));

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
