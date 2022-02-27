const mongoose = require('mongoose');

const InformationSchema = mongoose.Schema({
    braSize: [Number],
    castingPref: [String],
    picture: [
        {
            name: String,
            path: String
        }
    ],
    gender: [String],
    hairColor: [String],
    hairLenght: [Number],
    height: [Number],
    profession: [String],
    shoeSize: [Number],
    waistSize: [Number],
    weight: [Number]
})

module.exports = Information = mongoose.model('information', InformationSchema);