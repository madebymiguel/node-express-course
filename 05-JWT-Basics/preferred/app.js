const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
