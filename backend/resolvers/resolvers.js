const mongoParkingModel = require("../model/model");

var resolvers = {
  parkingData: () => {
    return mongoParkingModel.find({});
  },

  addParking: (args) => {
    let newParkingData = new mongoParkingModel({
      name: args.name,
      value: args.value,
    })
    newParkingData.save()
    return newParkingData;
  },

  updateParkingData: async ({name , value}) => {
    try {
      // Find the data object by name
      const dataObject = await mongoParkingModel.findOne({ name });

      // If data object not found, return null
      if (!dataObject) {
        return null;
      }

      // Update value field
      dataObject.value = value;

      // Save updated data object
      await dataObject.save();

      // Return updated data object
      return dataObject;
    } catch (error) {
      throw new Error('Failed to update data');
    }
  }

};

module.exports = resolvers;
