const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/FeedbackRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', feedbackRoutes);

module.exports = app;
