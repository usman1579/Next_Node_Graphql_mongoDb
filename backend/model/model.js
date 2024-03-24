const mongoose = require('mongoose');

const mogooseSchema = new mongoose.Schema({
    name: String,
    value: Boolean,
})

module.exports = new mongoose.model('MongoParkingModel', mogooseSchema );