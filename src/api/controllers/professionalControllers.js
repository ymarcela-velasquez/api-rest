const db = require('../../db/index')

module.exports.createProfessional = async (req, res) => {
  const professional = req.body
  const professionalCreated = await db.Professional.customCreate(professional)
  res.send(professionalCreated)
}


