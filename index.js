require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs");
const cors = require("cors");
const port = process.env.APP_PORT;
const swaggerDocument = YAML.load("./swagger.yaml");
const app = express();
const { createServer } = require("node:http");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks", require("./api/v1/controllers/tasksController"))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = createServer(app);

server.listen(port, () => {
  console.log(`App  running in port ${port}`);
});
