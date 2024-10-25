const express = require('express')
const router = express.Router()
const cameraController = require('../controllers/cameras')

router.get('/', cameraController.getRovers)

module.exports = router