/** Database setup for messages */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const db = new Client(DB_URI);

db.connect();

module.exports = db;
