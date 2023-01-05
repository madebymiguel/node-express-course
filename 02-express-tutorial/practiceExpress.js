const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/new-public/index.html");
});

app.get("/sample", (req, res) => {
  res.send("This is working.");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
