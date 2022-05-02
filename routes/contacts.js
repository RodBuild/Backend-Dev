const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// crashes if only searching /test
// router.get('/:user/:password', function (req, res) {
//     const context = req.url;
//     res.send(`You want to search ${context}`);
// })
// GET REQUESTS
router.get('/contacts/', controller.getAll);
router.get('/contacts/:id', controller.getSingle);

// POST REQUESTS
router.post('/contacts', controller.createContact);

// PUT REQUESTS
router.put('/contacts/:id', controller.updateContact);

// DELETE REQUESTS
router.delete('/contacts/:id', controller.deleteContact);

module.exports = router;
