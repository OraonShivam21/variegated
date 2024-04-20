const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const dayOfWeek = new Date();
  const dayNum = dayOfWeek.getDay();
  var message = "work hard";
  var day = "weekday";
  if (dayNum == 0 || dayNum == 6) {
    day = "weekend";
    message = "have fun";
  }
  res.render(path.join(__dirname + "/views/index.ejs"), { day, message });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
