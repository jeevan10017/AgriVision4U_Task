const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { updateData, getData } = require('../controllers/userController');

router.put('/update', auth, updateData);
router.get('/data', auth, getData);

module.exports = router;
