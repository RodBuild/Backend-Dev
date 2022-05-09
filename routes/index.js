const router = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');
// const controller = require('../controllers/index');

router.use('/swagger', swagger);
router.use('/contacts', contacts);
router.use('/test', require('../controllers/test').getJoke);
router.use('/', (req, res) => {
  let info = {
    github: 'https://github.com/RodBuild/Backend-Dev;',
    creator: 'Rodrigo Rodriguez'
  };
  res.send(info);
});

module.exports = router;
