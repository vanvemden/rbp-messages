const db = require('../db');

class postModel {
  static async getAll() {
    const results = await db.query('SELECT id, text FROM posts');
    return results.rows;
  }

  static async create(data) {
    // TODO
  }
}

module.exports = postModel;
