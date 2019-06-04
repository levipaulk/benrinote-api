const express = require('express');
const SectionsService = require('./sections-service');
const { requireAuth } = require('../middleware/jwt-auth');

const sectionsRouter = express.Router()
// const jsonBodyParser = express.json()

sectionsRouter
  .route('/:pub_id')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Get Sections by Publication (${req.params.pub_id}) Request from userID ${req.user.id}`)
    SectionsService.getSectionsByPubId(
      req.app.get('db'),
      req.params.pub_id
    )
      .then(sections => {
        res.status(200).json(SectionsService.serializeSections(sections))
      })
      .catch(next)
  })

module.exports = sectionsRouter;