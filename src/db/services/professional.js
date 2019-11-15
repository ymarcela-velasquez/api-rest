module.exports = (mongoose) => {
  var professionalSchema = require('../models/professional')(mongoose)
  professionalSchema.statics.customCreate = async function (data) {
    try { 
      let professional = await this.create(data)
      professional = professional.toObject()
      return professional
    } catch (e) {
      throw new CustomError(e)
    }
  }

  return mongoose.model('professionals', professionalSchema)
}