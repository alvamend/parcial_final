const { getSingle } = require("../../../v1/services/firebaseService");

const call = async(req,res) => {
  try {
    const { taskId } = req.params || undefined
    const { success, data }  = await getSingle({collectionName: "tasks", objectId: taskId})

    if(success){
      res.status(200).send({task: data})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  call
}
