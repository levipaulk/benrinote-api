const express = require('express');
const NotesService = require('./notes-service');
const { requireAuth } = require('../middleware/jwt-auth');

const notesRouter = express.Router()
// const jsonBodyParser = express.json()

notesRouter
  .route('/publication/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Get Notes by Publication (${req.params.id}) Request from userID ${req.user.id}`)
    NotesService.getNotesByPubId(
      req.app.get('db'),
      req.user.id,
      req.params.id
    )
      .then(notes => {
        console.log(notes)
        res.json(NotesService.serializeNotes(notes))
      })
      .catch(next)
  })

  notesRouter
  .route('/note/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Get Notes by Note Id Request from ${req.user.id}`)
    NotesService.getPub(
      req.app.get('db'),
      req.params.pub_id
    )
      .then(pub => {
        console.log(pub)
        res.json(NotesService.serializePub(pub))
      })
      .catch(next)
  })

module.exports = notesRouter;