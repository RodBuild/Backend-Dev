const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.use('/', (req, res) => {
  res.send(`try the following: <br><br> /swagger/api-docs`);
});

module.exports = router;
