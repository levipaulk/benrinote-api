const express = require('express');
const NotesService = require('./notes-service');
const SectionsService = require('../sections/sections-service');
const { requireAuth } = require('../middleware/jwt-auth');

const xss = require('xss');
const notesRouter = express.Router()
const jsonBodyParser = express.json()

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
  .post((req, res, next) => {
    console.log(`Post Notes by Publication (${req.params.id}) Requested from userId ${req.user.id}`)
    if( req.params.id == null)
      return res.status(400).json({
        error: 'Missing pub_id in request body'
      })
    
    NotesService.NotesExisty(
      req.app.get('db'),
      req.user.id,
      req.params.id
    )
      .then(existy => {
        return existy.length > 0
          ? res.status(401).json({ error: 'Notes already exist' })
          : console.log(existy)
      })
      .then(() => {
        return SectionsService.getOrderByPubId(
          req.app.get('db'),
          req.params.id
        )
      })
      .then(sections => {
        console.log(`Sections include `, sections)
        if (sections.length === 0) {
          return res.status(400).json({
            error: 'Sections do not exist'
          })
        } 
        else {
          return sections.map(section => {
            NotesService.createNewNote(
              req.app.get('db'),
              req.user.id,
              req.params.id,
              section.section
            )
          })
        }
      })
      .then(() => {
        console.log(`Notes created for User ${req.user.id} for Publication ${req.params.id}`)
        res.status(201).end()
      })
      .catch(next)
  })
  .delete((req, res, next) => {
    console.log(`Delete Notes for Pub Id (${req.params.id}) Requested from userId ${req.user.id}`)
    if( req.params.id == null)
      return res.status(400).json({
        error: 'Missing pub_id in request body'
      })
    NotesService.NotesExisty(
      req.app.get('db'),
      req.user.id,
      req.params.id
    )
      .then(existy => {
        return existy.length === 0
          ? res.status(401).json({ error: 'Notes do not exist' })
          : console.log(existy)
      })
      .then(() => {
        return NotesService.deleteNotes(
          req.app.get('db'),
          req.user.id,
          req.params.id
        )
      })
      .then(() => {
        console.log(`(from NotesRouter)Notes delted for User ${req.user.id} for Publication ${req.params.id}`)
        res.status(204).end()
      })
      .catch(next)
  })

notesRouter
  .route('/note/:id')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`(from NotesRouter) Get Note ID ${req.params.id} Request from ${req.user.id}`)
    NotesService.getPub(
      req.app.get('db'),
      req.params.id
    )
      .then(pub => {
        console.log(pub)
        res.json(NotesService.serializePub(pub))
      })
      .catch(next)
  })
  .patch(jsonBodyParser, (req, res, next) => {
    console.log(`(from NotesRouter) Patch Note ID ${req.params.id} Request from ${req.user.id}`)
    // if (!req.body.text) {
    //   return res.status(400).json(`'text' is required`)
    // }
    NotesService.updateNote(
      req.app.get('db'),
      xss(req.params.id),
      xss(req.body.text)
    )
      .then(() => {
        console.log(`(from NotesRouter) updateNote ran for note id ${req.params.id} with text ${req.body.text}`)
        res.status(204).end()
      })
      .catch(next)
  })

module.exports = notesRouter;