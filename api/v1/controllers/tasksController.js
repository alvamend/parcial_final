const express = require("express")
const router = express.Router()

const createValidator = require("../validators/createTaskValidator");

const getCommand = require("../commands/tasks/getAllTasks");
const getSingleCommand = require("../commands/tasks/getSingleTask");
const addCommand = require("../commands/tasks/createTask");
const updateCommand = require("../commands/tasks/updateTask");
const deleteCommand = require("../commands/tasks/deleteTask");

router.route("/")
  .get(getCommand.call)
  .post(createValidator, addCommand.call)

router.route("/:taskId")
  .get(getSingleCommand.call)
  .delete(deleteCommand.call)
  .put(createValidator, updateCommand.call)

module.exports = router
