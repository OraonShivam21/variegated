const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome to the Ecommerce API with RBAC" });
});

// all the routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
