const db = require('../../db/index')

module.exports.createAdmin =  async (req, res) => {
  const admin = req.body
  console.log("admin:", admin)
  console.log(db.Admin)
  const adminCreated = await db.Admin.customCreate(admin)
  
  res.send(adminCreated)
}


