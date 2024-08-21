require('dotenv').config(); // Load environment variables

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'studentdata',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  // Add other environments like 'test' or 'production' if needed
};
