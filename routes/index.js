const router = require('express').Router();
const controller = require('../controllers/index');

router.use('/individual', controller.getPerson);

module.exports = router;
