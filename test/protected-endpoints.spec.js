// const knex = require('knex')
// const app = require('../src/app')
// const helpers = require('./test-helpers')

// describe('Protected endpoints', function() {
//   let db

//   const { 
//     testUsers, 
//     testUserPub, 
//     testPublications, 
//     testSections, 
//     testNotes 
//   } = helpers.makeFixtures()

//   before('make knex instance', () => {
//     db = knex({
//       client: 'pg',
//       connection: process.env.TEST_DB_URL,
//     })
//     app.set('db', db)
//   })

//   after('disconnect from db', () => db.destroy())

//   before('cleanup', () => helpers.cleanTables(db))

//   afterEach('cleanup', () => helpers.cleanTables(db))

//   beforeEach('insert benrinote content', () =>
//     helpers.seedBenrinote(
//       db,
//       testUsers,
//       testUserPub,
//       testPublications,
//       testSections,
//       testNotes
//     )
//   )

//   const protectedEndpoints = [
//     {
//       name: 'GET /api/userpub',
//       path: '/api/things/1',
//       method: supertest(app).get,
//     },
//     {
//       name: 'POST /api/userpub/:pub_id',
//       path: '/api/things/1',
//       method: supertest(app).post,
//     },
//     {
//       name: 'DELETE /api/userpub/:pub_id',
//       path: '/api/things/1',
//       method: supertest(app).delete,
//     },
//     {
//       name: 'GET /api/userpub/userinfo',
//       path: '/api/things/1',
//       method: supertest(app).get,
//     },
//     {
//       name: 'GET /api/publications/',
//       path: '/api/things/1/reviews',
//       method: supertest(app).get,
//     },
//     {
//       name: 'GET /api/publications/:pub_id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).get,
//     },
//     {
//       name: 'GET /api/notes/publication/:id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).get,
//     },
//     {
//       name: 'POST /api/notes/publication/:id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).post,
//     },
//     {
//       name: 'DELETE /api/notes/publication/:id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).delete,
//     },
//     {
//       name: 'GET /api/notes/note/:id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).get,
//     },
//     {
//       name: 'PATCH /api/notes/note/:id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).patch,
//     },
//     {
//       name: 'GET /api/sections/:pub_id',
//       path: '/api/things/1/reviews',
//       method: supertest(app).get,
//     },
//     {
//       name: 'POST /api/refresh',
//       path: '/api/auth/refresh',
//       method: supertest(app).post,
//     },
//   ]

//   protectedEndpoints.forEach(endpoint => {
//     describe(endpoint.name, () => {
//       it(`responds 401 'Missing bearer token' when no bearer token`, () => {
//         return endpoint.method(endpoint.path)
//           .expect(401, { error: `Missing bearer token` })
//       })

//       it(`responds 401 'Unauthorized request' when invalid JWT secret`, () => {
//         const validUser = testUsers[0]
//         const invalidSecret = 'bad-secret'
//         return endpoint.method(endpoint.path)
//           .set('Authorization', helpers.makeAuthHeader(validUser, invalidSecret))
//           .expect(401, { error: `Unauthorized request` })
//       })

//       it(`responds 401 'Unauthorized request' when invalid sub in payload`, () => {
//         const invalidUser = { user_name: 'user-not-existy', id: 1 }
//         return endpoint.method(endpoint.path)
//           .set('Authorization', helpers.makeAuthHeader(invalidUser))
//           .expect(401, { error: `Unauthorized request` })
//       })
//     })
//   })
// })
