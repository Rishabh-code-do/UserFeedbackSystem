const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
