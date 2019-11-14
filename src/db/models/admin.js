const mongoose = require('mongoose')

const Schema = mongoose.Schema

//schema
let adminSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  document: {
    type: String,
    required: [true, 'Document is required']
  }
  
})

//model
const admin = mongoose.model('Admin',adminSchema)

module.exports = admin

