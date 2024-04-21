import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs");
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  const numberOfLetters = fName.length + lName.length;
  res.render("solution.ejs", { numberOfLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
