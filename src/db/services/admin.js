module.exports = (mongoose) => {
  var adminSchema = require('../models/admin')(mongoose)
  adminSchema.statics.customCreate = async function (data) {
    try {
      let admin = await this.create(data)
      admin = admin.toObject()
      return admin
    } catch (e) {
      throw new CustomError(e)
    }
  }
  

return mongoose.model('admins', adminSchema)

}



