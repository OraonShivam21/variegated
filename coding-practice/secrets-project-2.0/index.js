// HINTS:
// 1. Import express and axios
// 2. Create an express app and set the port number.
// 3. Use the public folder for static files.
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
// 6. Listen on your predefined port and start the server.

import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    const data = result.data;
    console.log(data);
    res.render("index.ejs", { secret: data.secret, user: data.username });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", {
      secret: "",
      user: "Some error occured while fetching random secret",
    });
  }
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
