const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Chat App Backend API" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
