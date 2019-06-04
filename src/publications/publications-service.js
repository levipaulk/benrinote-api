const xss = require('xss');

const PubService = {
  getPubs(db) {
    return db
      .from('benrinote_publications As p')
      .leftJoin('benrinote_users AS u', 'p.author_id', 'u.id')
      .select('p.id', 'p.title', 'p.cover', 'p.summary', 'u.user_name AS author')
  },

  getPub(db, pub_id) {
    return db
      .from('benrinote_publications')
      .select('*')
      .where('id', pub_id)
      .first()
  },

  serializePubs(pubs) {
    return pubs.map(this.serializePub)
  },

  serializePub(pub) {
    return {
      id: pub.id,
      title: xss(pub.title),
      cover: xss(pub.cover),
      summary: xss(pub.summary),
      author: xss(pub.author),
    }
  }
}

module.exports = PubService;