const { body } = require("express-validator");

const validator = [
  body("description", "Invalid description").not().isEmpty(),
  body("deadline", "Invalid date").not().isEmpty().isDate()
]

module.exports = validator;
