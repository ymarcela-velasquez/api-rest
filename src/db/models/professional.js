
module.exports = (mongoose) => {
const Schema = mongoose.Schema

const professionalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },

  document: {
    type: String,
    required: [true, 'Document is required']
  },

  profession: {
    type: String,
    required: [true, 'Profession is required']
  }
})
  
let modelSchema = new Schema(professionalSchema, {strict: true, timestamps: true})

return modelSchema
}


