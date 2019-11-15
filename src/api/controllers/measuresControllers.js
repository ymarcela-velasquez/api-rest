const db = require('../../db/index')

module.exports.createMeasures =  async (req, res) => {
  const measure = req.body
  const measureCreated = await db.Measures.customCreate(measure)
  
  res.send(measureCreated)
}
