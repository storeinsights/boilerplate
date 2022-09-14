const express = require('express');
// const db = require('./../db/mariadb');
const HealthController = require('../controllers/health.controller');
const AuthController = require('../controllers/auth.controller');
const SampleController = require('../controllers/sample.controller');

const router = express.Router();

// register controllers
const healthController = new HealthController();
healthController.register(router);

const authController = new AuthController();
authController.auth(router);

const sampleController = new SampleController();
sampleController.register(router);

module.exports = router;
