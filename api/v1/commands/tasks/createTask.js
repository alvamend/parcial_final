const { add } = require("../../../v1/services/firebaseService");
const { validationResult } = require("express-validator");
const Task = require("../../models/Task");

const call = async(req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  try {
    const task = new Task(req.body)
    const { success, data } = await add({collectionName: "tasks", payload: task.toJSON()})

    if(!success){
      return res.status(422).json({error: "could not add task"})
    }

    res.status(200).json({ data });
  
  } catch (error) {
    console.error(error.message)
    res.status(503).send({error: error.message})
  }
}

module.exports = {
  call
}
