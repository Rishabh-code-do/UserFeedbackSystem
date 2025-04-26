const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: { type: String, enum: ['bug', 'suggestion', 'feature'], default: 'suggestion' },
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);