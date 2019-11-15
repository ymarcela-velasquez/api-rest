module.exports = (mongoose) => {
  var patientSchema = require('../models/patient')(mongoose)
  patientSchema.statics.customCreate = async function (data) {
    try {
      let patient = await this.create(data)
      patient = patient.toObject()
      return patient
    } catch (e) {
      throw new CustomError(e)
    }
  },

  patientSchema.statics.customFind = async function (query) {
    try {
      const patients = await this.findAll(query)
      return patients
    } catch (e) {
      throw new CustomError(e)
    }
  }

  return mongoose.model('patients', patientSchema)
  
}