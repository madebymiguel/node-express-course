const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
