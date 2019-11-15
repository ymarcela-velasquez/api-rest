module.exports = (mongoose) => {
  var measureSchema = require('../models/measures')(mongoose)
  measureSchema.statics.customCreate = async function (data) {
    try {
      let measure = await this.create(data)
      measure = measure.toObject()
      return measure
    } catch (e) {
      throw new CustomError(e)
    }
  }

  return mongoose.model('measures', measureSchema)
}