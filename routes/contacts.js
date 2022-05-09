const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// crashes if only searching /test
// router.get('/:user/:password', function (req, res) {
//     const context = req.url;
//     res.send(`You want to search ${context}`);
// })
// GET REQUESTS
router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

// POST REQUESTS
router.post('/', controller.createContact);

// PUT REQUESTS
router.put('/:id', controller.updateContact);

// DELETE REQUESTS
router.delete('/:id', controller.deleteContact);

module.exports = router;
