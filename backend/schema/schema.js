var { graphql, buildSchema } = require("graphql");

var parkingSchema = buildSchema(`
  type Query {
    parkingData: [List]
  }

  type Mutation {
    addParking ( name : String! , value : Boolean!) : List
    updateParkingData (name: String!, value: Boolean!): List
  }

  type List {
    name : String,
    value : Boolean
  }
`);

  
module.exports = parkingSchema