const { deleteObject } = require("../../../v1/services/firebaseService");

const call = async(req,res) => {
  try {
    const { taskId } = req.params || undefined
    const { success }  = await deleteObject({collectionName: "tasks", objectId: taskId})

    if(success){
      res.status(200).send({message: "task deleted"})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  call
}
