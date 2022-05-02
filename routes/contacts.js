const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// crashes if only searching /test
// router.get('/:user/:password', function (req, res) {
//     const context = req.url;
//     res.send(`You want to search ${context}`);
// })
router.get('/contacts/', controller.getAll);
router.get('/contacts/:id', controller.getSingle);
// router.get('/:id', contactsController.getSingle);

module.exports = router;
