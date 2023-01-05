const express = require("express");
const consoleLog = require("./practice-middleware");

const app = express();
const PORT = 3000;

app.use(consoleLog);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/new-public/index.html");
});

app.get("/sample", (req, res) => {
  res.send("This is working.");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
