const express = require('express');
const UserPubService = require('./userpub-service');
const { requireAuth } = require('../middleware/jwt-auth');

const userpubRouter = express.Router()
const jsonBodyParser = express.json()

userpubRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    UserPubService.getUserPub(
      req.app.get('db'),
      req.user.id
    )
      .then(userPub => {
        res.json(UserPubService.serializeUserPubs(userPub))
      })
      .catch(next)
  })

userpubRouter
  .route('/:pub_id')
  .all(requireAuth)
  .post((req, res, next) => {
    if( req.params.pub_id == null)
      return res.status(400).json({
        error: 'Missing pub_id in request body'
      })
    UserPubService.insertUserPub(
      req.app.get('db'),
      req.user.id,
      req.params.pub_id
    )
      .then(() => {
        res.status(204).end()
      })
      .catch(next)
  })
  .delete((req, res, next) => {
    UserPubService.deleteUserPub(
      req.app.get('db'),
      req.user.id,
      req.params.pub_id
    )
      .then(() => {
        res.status(204).end()
      })
      .catch(next)
  })

userpubRouter
  .route('/userinfo')
  .all(requireAuth)
  .get((req, res, next) => {
    UserPubService.getUserInfo(
      req.app.get('db'),
      req.user.id
    )
      .then(userInfo => {
        res.json(UserPubService.serializeUserInfo(userInfo))
      })
      .catch(next)
  })

async function checkUserPubExists(req, res, next) {
  
}

module.exports = userpubRouter;