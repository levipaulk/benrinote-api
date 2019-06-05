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

  userPubByUserId(db, user_id) {
    return db
      .from('user_pub')
      .select('pub_id')
      .where('user_id', user_id)
  },

  NotesExisty(db, user_id, pub_id) {
    console.log(user_id, pub_id)
    return db
      .from('benrinote_notes')
      .select('*')
      .where({ user_id, pub_id })
  },

  createNewNote(db, user_id, pub_id, section) {
    return db
      .insert({ user_id, pub_id, section })
      .into('benrinote_notes')
      .then(res => console.log(`inserted note for User Id ${user_id}, Pub Id ${pub_id}, Section ${section}`))
  },

  deleteNotes(db, user_id, pub_id) {
    return db
      .from('benrinote_notes')
      .where({ user_id, pub_id })
      .delete()
      .then(res => console.log(`(from NotesService)deleted notes for User Id ${user_id}, Pub Id ${pub_id}`))
  },

  updateNote(db, id, text) {
    return db('benrinote_notes').where({ id }).update({ text })
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