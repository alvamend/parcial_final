const { get } = require("../../../v1/services/firebaseService");

const call = async(req,res) => {
  try {
    const { success, data }  = await get({collectionName: "tasks"})

    if(success){
      res.status(200).send({tasks: data})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  call
}
