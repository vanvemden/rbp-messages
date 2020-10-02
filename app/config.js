require('dotenv').config();

const API_ROOT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://whatshouldgohere.herokuapp.com';

module.exports = {
  API_ROOT_URL,
};
