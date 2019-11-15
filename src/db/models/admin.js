
module.exports = (mongoose) => {
const Schema = mongoose.Schema
  //schema
let schema = new Schema({
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
let modelSchema = new Schema(schema, {strict: true, timestamps: true})
return modelSchema
}


