const express = require('express');
const { submitFeedback, getFeedbacks } = require('../controllers/feedbackController');

const router = express.Router();
router.post('/feedback', submitFeedback);
router.get('/feedback', getFeedbacks);

module.exports = router;
