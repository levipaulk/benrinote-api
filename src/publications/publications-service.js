const xss = require('xss');

const PubService = {
  getPubs(db) {
    return db
      .from('benrinote_publications')
      .select('*')
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
      date_created: pub.date_created,
      date_modified: pub.date_modified,
      author_id: pub.author_id,
      publisher_id: pub.publisher_id
    }
  }
}

module.exports = PubService;