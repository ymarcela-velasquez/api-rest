module.exports = (mongoose) => {
const Schema = mongoose.Schema

//Schema
let measuresSchema = new Schema({
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
let modelSchema = new Schema(measuresSchema, {strict: true, timestamps: true})
return modelSchema
}



