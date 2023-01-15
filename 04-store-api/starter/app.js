const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");
const productsRouter = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1> <a href="/api/v1/products">Products Route</a>`);
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
