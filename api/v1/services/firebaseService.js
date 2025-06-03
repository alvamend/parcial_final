const db = require("../config/firebase")

const get = async({ collectionName }) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const result = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    console.error(error.message)
    return {
      success: false,
    }
  }
}

const getSingle = async({collectionName, objectId}) => {
  const doc = await db.collection(collectionName).doc(objectId).get();

  return doc.exists ? {success: true, data: {...doc.data(), id: doc.id}} : {success: false}
}

const add = async({ collectionName, payload }) => {
  try {
    const docRef = await db.collection(collectionName).add(payload);
    const docWithId = { ...payload, id: docRef.id };

    return {
      success: true,
      data: docWithId,
    };
  } catch (error) {
    console.error(error.message)
    return {
      success: false,
    }
  }
}

const updateObject = async({ collectionName, objectId, payload }) => {
  try {
    const docRef = await db.collection(collectionName).doc(objectId).update(payload);

    return {
      success: true,
      data: {
        id: objectId,
        ...payload
      }
    };
  } catch (error) {
    console.error(error.message)
    return {
      success: false,
    }
  }
}

const deleteObject = async({ collectionName, objectId }) => {
  try {
    await db.collection(collectionName).doc(objectId).delete();

    return {
      success: true,
    };
  } catch (error) {
    console.error(error.message)
    return {
      success: false,
    }
  }
}

module.exports = {
  get,
  getSingle,
  add,
  updateObject,
  deleteObject
}
