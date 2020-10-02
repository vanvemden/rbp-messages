const db = require('../db');
const ExpressError = require('../ExpressError');

class Post {
  static async getAll() {
    const results = await db.query('SELECT id, text FROM posts');
    return results.rows;
  }

  static async create({ text }) {
    const result = await db.query(
      `INSERT INTO posts (
              text )
            VALUES ($1)
            RETURNING id, text, created`,
      [text],
    );

    return result.rows[0];
  }
}

module.exports = Post;
