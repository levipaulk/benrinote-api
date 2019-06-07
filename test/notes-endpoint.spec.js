const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Notes Endpoints', function() {
  let db

  const {
    testUsers,
    testUserPub,
    testPublications,
    testSections,
    testNotes
  } = helpers.makeFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe(`/api/notes/publication/:id`, () => {
    beforeEach('insert stuff', () =>
      helpers.seedBenrinote(
        db,
        testUsers,
        testUserPub,
        testPublications,
        testSections,
        testNotes
      )
    )
    it(`GET finds an existing notes, responding with 200 and the notes`, function() {
      this.retries(3)
      const testUser = testUsers[0]
      const testNote = testNotes[0]
      return supertest(app)
        .get('/api/notes/publication/1')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .expect(200)
        .expect(res => {
          // console.log('TESTNOTE:    ', testNote)
          // console.log('RES[0]:    ', res.body[0])
          expect(res.body[0]).to.have.property('id')
          expect(res.body[0].pub_id).to.eql(testNote.pub_id)
          expect(res.body[0].section).to.eql(testNote.section)
          expect(res.body[0].text).to.eql(testNote.text)
        })
        .expect(() =>
          db
            .from('benrinote_notes')
            .select('*')
            .where({ id: testNote.id })
            .first()
            .then(row => {
              expect(row.user_id).to.eql(testNote.user_id)
              expect(row.pub_id).to.eql(testNote.pub_id)
              expect(row.section).to.eql(testNote.section)
              expect(row.text).to.eql(testNote.text)
            })
        )
    })
    it(`POST creates a note, responding with 201`, function() {
      this.retries(3)
      const testUser = testUsers[3]
      const newNote = {
        user_id: testUser.id
      }
      return supertest(app)
        .post('/api/notes/publication/1')
        .set('Authorization', helpers.makeAuthHeader(testUsers[3]))
        .send(newNote)
        .expect(201)
    })
    it(`DELETE deletes a note, responding with 204`, function() {
      this.retries(3)
      const testUser = testUsers[0]
      return supertest(app)
        .delete('/api/notes/publication/1')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .expect(204)
    })
  })
  
  describe(`/api/notes/note/:id`, () => {
    beforeEach('insert stuff', () =>
      helpers.seedBenrinote(
        db,
        testUsers,
        testUserPub,
        testPublications,
        testSections,
        testNotes
      )
    )
    it(`PATCH updates an existing note, responding with 201`, function() {
      this.retries(3)
      const testUser = testUsers[0]
      const testNote = { ...testNotes[0], text: 'new text'}
      return supertest(app)
        .patch('/api/notes/note/1')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .send({text: 'new text'})
        .expect(204)
        .expect(() =>
          db
            .from('benrinote_notes')
            .select('*')
            .where({ id: testNote.id })
            .first()
            .then(row => {
              // console.log('TESTNOTE :     ', testNote)
              // console.log('ROW   :      ', row)
              expect(row.pub_id).to.eql(testNote.pub_id)
              expect(row.section).to.eql(testNote.section)
              expect(row.text).to.eql(testNote.text)
            })
        )
    })
  })
})