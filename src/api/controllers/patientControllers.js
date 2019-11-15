const db = require('../../db/index')

module.exports.createPatient = async (req, res) => {
  const patient = req.body
  const patientCreated = await db.Patient.customCreate(patient)

  res.send(patientCreated)
}

module.exports.findPatients = async (req, res) => {
  const patientsFind = await db.Admin.customFind(req.query)
  res.send(patientsFind)
}