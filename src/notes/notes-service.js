const xss = require('xss');

const NotesService = {
  getNotesByPubId(db, userId, pubId) {
    return db
      .distinct('n.id', 'n.pub_id', 'n.text', 'n.section', 's.title')
      .from('benrinote_notes AS n')
      .leftJoin('benrinote_sections As s', 'n.section', 's.section')
      .where({ 'n.user_id': userId, 's.pub_id': pubId, 'n.pub_id': pubId})
      .orderBy('n.section')
  },

  createNewNotes(db, userId, pubId) {
    return db
      .insert()
  },

  getPub(db, pub_id) {
    return db
      .from('benrinote_publications')
      .select('*')
      .where('id', pub_id)
      .first()
  },

  serializeNotes(notes) {
    return notes.map(this.serializeNote)
  },

  serializeNote(note) {
    return {
      id: note.id,
      pub_id: note.pub_id,
      section: note.section,
      title: note.title,
      text: xss(note.text)
    }
  }
}

module.exports = NotesService;