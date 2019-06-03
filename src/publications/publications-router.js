const express = require('express');
const PubService = require('./publications-service');
const { requireAuth } = require('../middleware/jwt-auth');

const pubRouter = express.Router()
// const jsonBodyParser = express.json()

pubRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Request from ${req.user.id}`)
    PubService.getPubs(
      req.app.get('db')
    )
      .then(pubs => {
        res.json(PubService.serializePubs(pubs))
      })
      .catch(next)
  })

pubRouter
  .route('/:pub_id')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Request from ${req.user.id}`)
    PubService.getPub(
      req.app.get('db'),
      req.params.pub_id
    )
      .then(pub => {
        // console.log(pub)
        res.json(PubService.serializePub(pub))
      })
      .catch(next)
  })

module.exports = pubRouter;