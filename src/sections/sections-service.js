const xss = require('xss');

const SectionsService = {
  getSectionsByPubId(db, pubId) {
    return db
    .distinct('*')
    .from('benrinote_sections AS s')
    .where('s.pub_id', pubId)
    // .where('n.user_id', userId)
    // .andWhere('s.pub_id', pubId)
    // .andWhere('n.pub_id', pubId)
    .orderBy('s.section')
  },

  serializeSections(sec) {
    return sec.map(this.serializeSection)
  },

  serializeSection(sec) {
    return {
      id: sec.id,
      pub_id: sec.pub_id,
      section: sec.section,
      title: xss(sec.title),
      text: xss(sec.text),
      type: sec.type
    }
  }
}

module.exports = SectionsService;