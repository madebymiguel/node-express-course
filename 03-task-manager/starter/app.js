const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.post("/api/v1/tasks");

// app.get("/api/v1/tasks/:id");

// app.patch("/api/v1/tasks/:id");

// app.delete("/api/v1/tasks/:id");

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
