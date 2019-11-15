const express = require('express')
const Admin = require('../controllers/adminControllers')
const router = express.Router()

router.post('/', Admin.createAdmin)

module.exports = router