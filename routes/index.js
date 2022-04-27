const router = require('express').Router();
const controller = require('../controllers/index');

router.use('/', controller.getPerson);

module.exports = router;