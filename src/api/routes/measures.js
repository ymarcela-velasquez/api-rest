const express = require('express')
const Measures = require('../controllers/measuresControllers')
const router = express.Router()

router.post('/', Measures.createMeasures)

module.exports = router