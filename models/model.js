const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    picture: String,
    gender: String,
    dateOfBirth: String,
    profession: String,
    shoeSize: Number,
    hairColor: String,
    hairLength: Number,
    braSize: Number,
    waistSize: Number,
    height: Number,
    weight: Number,
    castingPreference: String,
})

module.exports = Model = mongoose.model("model", ModelSchema);