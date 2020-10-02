require('dotenv').config();

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///messages_test'
    : 'postgresql:///messages';

const SECRET_KEY = process.env.SECRET_KEY || 'thisIsVerySecret';

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
