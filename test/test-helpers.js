const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Columns of benrinote_users table
// id|user_name|full_name|password|nickname|date_created|date_modified|type
function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      nickname: 'TU1',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      nickname: 'TU2',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      nickname: 'TU3',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      nickname: 'TU4',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

// Columns of user_pub table
// user_id|pub_id|date_created
function makeUserPubArray() {
  return [
    {user_id: 1, pub_id: 1, date_created: '2029-01-22T16:28:32.615Z'},
    {user_id: 1, pub_id: 2, date_created: '2029-01-22T16:28:32.615Z'},
    {user_id: 1, pub_id: 3, date_created: '2029-01-22T16:28:32.615Z'},
    {user_id: 2, pub_id: 1, date_created: '2029-01-22T16:28:32.615Z'},
    {user_id: 2, pub_id: 2, date_created: '2029-01-22T16:28:32.615Z'},
    {user_id: 2, pub_id: 3, date_created: '2029-01-22T16:28:32.615Z'},
  ]
}

// Columns of benrinote_publications table
// id |title|cover|summary|date_created|date_modified|author_id|publisher_id
function makePublicationsArray() {
  return [
    {id: 1, title: 'Publication 1', cover: 'https://octodex.github.com/images/minion.png', summary: 'Examples of things you can do with markdown. Source: https://markdown-it.github.io/', date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', author_id: 1, publisher_id: 2},
    {id: 2, title: 'Publication 2', cover: 'https://octodex.github.com/images/minion.png', summary: 'Examples of things you can do with markdown. Source: https://markdown-it.github.io/', date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', author_id: 1, publisher_id: 2},
    {id: 3, title: 'Publication 3', cover: 'https://octodex.github.com/images/minion.png', summary: 'Examples of things you can do with markdown. Source: https://markdown-it.github.io/', date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', author_id: 1, publisher_id: 2}
  ]
}

// Columns of benrinote_sections table
// id|pub_id|section|title|text|type
function makeSectionsArray() {
  return [
    {id: 1, pub_id: 1, section: 1, title: 'First Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 2, pub_id: 1, section: 2, title: 'Second Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 3, pub_id: 1, section: 3, title: 'Third Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 4, pub_id: 2, section: 1, title: 'First Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 5, pub_id: 2, section: 2, title: 'Second Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 6, pub_id: 2, section: 3, title: 'Third Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 7, pub_id: 3, section: 1, title: 'First Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 8, pub_id: 3, section: 2, title: 'Second Section', text: 'Lorem ipsum dolor sit amet', type: 'md'},
    {id: 9, pub_id: 3, section: 3, title: 'Third Section', text: 'Lorem ipsum dolor sit amet', type: 'md'}
  ]
}

// Columns of benrinote_notes table
// id|user_id|pub_id|section|date_created|date_modified|text
function makeNotesArray() {
  return [
    {id: 1, user_id: 1, pub_id: 1, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 1s SECTION 1 NOTES'},
    {id: 2, user_id: 1, pub_id: 1, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 1s SECTION 2 NOTES'},
    {id: 3, user_id: 1, pub_id: 1, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 1s SECTION 3 NOTES'},
    {id: 4, user_id: 1, pub_id: 2, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 2s SECTION 1 NOTES'},
    {id: 5, user_id: 1, pub_id: 2, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 2s SECTION 2 NOTES'},
    {id: 6, user_id: 1, pub_id: 2, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 2s SECTION 3 NOTES'},
    {id: 7, user_id: 1, pub_id: 2, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 3s SECTION 1 NOTES'},
    {id: 8, user_id: 1, pub_id: 2, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 3s SECTION 2 NOTES'},
    {id: 9, user_id: 1, pub_id: 2, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 1s PUBLICATION 3s SECTION 3 NOTES'},
    {id: 10, user_id: 2, pub_id: 1, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 1s SECTION 1 NOTES'},
    {id: 11, user_id: 2, pub_id: 1, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 1s SECTION 2 NOTES'},
    {id: 12, user_id: 2, pub_id: 1, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 1s SECTION 3 NOTES'},
    {id: 13, user_id: 2, pub_id: 2, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 2s SECTION 1 NOTES'},
    {id: 14, user_id: 2, pub_id: 2, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 2s SECTION 2 NOTES'},
    {id: 15, user_id: 2, pub_id: 2, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 2s SECTION 3 NOTES'},
    {id: 16, user_id: 2, pub_id: 2, section: 1, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 3s SECTION 1 NOTES'},
    {id: 17, user_id: 2, pub_id: 2, section: 2, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 3s SECTION 2 NOTES'},
    {id: 18, user_id: 2, pub_id: 2, section: 3, date_created: '2029-01-22T16:28:32.615Z', date_modified: '2029-01-22T16:28:32.615Z', text: 'Test notes for USER 2s PUBLICATION 3s SECTION 3 NOTES'}
  ]
}

function makeFixtures() {
  const testUsers = makeUsersArray()
  const testUserPub = makeUserPubArray()
  const testPublications = makePublicationsArray()
  const testSections = makeSectionsArray()
  const testNotes = makeNotesArray()
  return { testUsers, testUserPub, testPublications, testSections, testNotes }
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE 
      benrinote_notes,
      benrinote_sections,
      user_pub,
      benrinote_publications,
      benrinote_users
      RESTART IDENTITY CASCADE;`
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('benrinote_users').insert(preppedUsers)
    .then(() =>
      db.raw(
        `SELECT setval('benrinote_users_id_seq', ?)`,
        [users[users.length - 1].id]
      )
    )
}

function seedBenrinote(db, users, userpub, publications, sections, notes) {
  return db.transaction(async trx => {
    await seedUsers(trx, users)
    await trx.into('benrinote_publications').insert(publications)
    await trx.raw(
      `SELECT setval('benrinote_publications_id_seq', ?)`,
      [publications[publications.length - 1].id]
    )
    await trx.into('user_pub').insert(userpub)
    await trx.into('benrinote_sections').insert(sections)
    await trx.raw(
      `SELECT setval('benrinote_sections_id_seq', ?)`,
      [sections[sections.length - 1].id]
    )
    await trx.into('benrinote_notes').insert(notes)
    await trx.raw(
      `SELECT setval('benrinote_notes_id_seq', ?)`,
      [notes[notes.length - 1].id]
    )
  })
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeUserPubArray,
  makePublicationsArray,
  makeSectionsArray,
  makeNotesArray,

  makeFixtures,
  cleanTables,
  makeAuthHeader,
  seedUsers,
  seedBenrinote,
}