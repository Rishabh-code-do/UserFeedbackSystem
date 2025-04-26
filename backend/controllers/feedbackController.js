const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const { category, sortField = 'timestamp', sortOrder = 'desc', page = 1, limit = 10 } = req.query;
    const limitNumber = Math.min(Math.max(parseInt(limit, 10), 5), 50);
    const pageNumber = parseInt(page, 10) || 1;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    const sortOption = {};
    if (sortField && sortOrder) {
      sortOption[sortField] = sortOrder === 'asc' ? 1 : -1;
    }
    const skip = (pageNumber - 1) * limitNumber;
    const totalCount = await Feedback.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limitNumber);
    const feedbacks = await Feedback.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);
    const hasNextPage = pageNumber < totalPages;

    res.status(200).json({
      feedbacks,
      totalPages,
      currentPage: pageNumber,
      totalCount,
      limit: limitNumber,
      hasNextPage,
    });
  } catch (err) {
    console.error('Error fetching feedbacks:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};