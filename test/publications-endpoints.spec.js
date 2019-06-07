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

  describe(`/api/publications/`, () => {
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
    it(`GET finds all existing publications, responding with 200 and the publications`, function() {
      const testUser = testUsers[0]
      this.retries(3)
      return supertest(app)
        .get('/api/publications/')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .expect(200)
        .expect(res => {
          // console.log('testPublications[0]   :', testPublications[0])
          // console.log('RES.BODY[0]   :', res.body[0])
          expect(res.body[0].cover).to.eql(testPublications[0].cover)
          expect(res.body[0].id).to.eql(testPublications[0].id)
          expect(res.body[0].summary).to.eql(testPublications[0].summary)
          expect(res.body[0].title).to.eql(testPublications[0].title)
        })
    })
  })
  describe(`/api/publications/:id`, () => {
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
    it(`GET finds an existing publication, responding with 200 and the publication`, function() {
      const testUser = testUsers[0]
      this.retries(3)
      return supertest(app)
        .get('/api/publications/1')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .expect(200)
        .expect(res => {
          // console.log('testPublications[0]   :', testPublications[0])
          // console.log('RES.BODY[0]   :', res.body[0])
          expect(res.body.cover).to.eql(testPublications[0].cover)
          expect(res.body.id).to.eql(testPublications[0].id)
          expect(res.body.summary).to.eql(testPublications[0].summary)
          expect(res.body.title).to.eql(testPublications[0].title)
        })
    })
  })
})