const express = require('express')
const Professional = require('../controllers/professionalControllers')
const router = express.Router()

router.post('/', Professional.createProfessional)

module.exports = router