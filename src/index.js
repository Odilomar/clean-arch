const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/status", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API Service is runing!",
  });
});

app.listen(3000);
