const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']

  },
  document:{
    type: String,
    required: [true, 'Document is required']
  }
  
})

//model
const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient