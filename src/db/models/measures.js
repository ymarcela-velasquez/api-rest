const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema
const measuresSchema = new Schema({
  weight: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  waist: {
    type: Number,
    required: true
  }

})

//Model
const Measures = mongoose.model('Measures', measuresSchema)

module.exports = Measures

