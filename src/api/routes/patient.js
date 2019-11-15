const express = require('express')
const Patient = require('../controllers/patientControllers')
const router = express.Router()

router.post('/', Patient.createPatient)

router.get('/', Admin.findPatients)

module.exports = router