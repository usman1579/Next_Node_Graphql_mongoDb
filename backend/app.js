const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");
const resolvers = require("./resolvers/resolvers");
const parkingSchema = require("./schema/schema");
require('dotenv').config();
app.use(cors());

const PASSWORD = process.env.PASSWORD;

console.log('PASSWORD : ',PASSWORD)
const uri =
  `mongodb+srv://usmanrafique1579:${PASSWORD}@parkingcluster0.xy4cyik.mongodb.net/?retryWrites=true&w=majority&appName=ParkingCluster0`;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: parkingSchema,
    rootValue: resolvers,
  })
);


// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.get("/hi", (req, res) => {
  res.send("Hello From Express Server!");
});

app.listen(4000, () => {
  console.log("Server on Port 4000");
});
