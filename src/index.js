const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const { getUser, postUser } = require("./adapter/controller");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/status", (_, res) => {
  res.status(200).json({
    status: 200,
    message: "API Service is runing!",
  });
});

app.get("/users/:id", getUser);
app.post("/users", postUser);

app.listen(3000);
