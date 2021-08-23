const express = require("express");
const { getUser, postUser } = require("./adapter/controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/status", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API Service is runing!",
  });
});

app.get("/users/:id", getUser);
app.post("/users", postUser);

app.listen(3000);
