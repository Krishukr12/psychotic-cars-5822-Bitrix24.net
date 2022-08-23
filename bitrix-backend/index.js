const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(8080, () => {
  console.log("Listening to port 8000");
});