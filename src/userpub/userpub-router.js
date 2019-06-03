const express = require('express');
const UserPubService = require('./userpub-service');
const { requireAuth } = require('../middleware/jwt-auth');

const userpubRouter = express.Router()
const jsonBodyParser = express.json()

userpubRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(`Request from ${req.user.id}`)
    UserPubService.getUserPub(
      req.app.get('db'),
      req.user.id
    )
      .then(userPub => {
        console.log(userPub)
        res.json(userPub.map(UserPubService.serializeUserPub))
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { pub_id } = req.body
    const newUserPub = { pub_id }

    if( newUserPub.pub_id == null)
      return res.status(400).json({
        error: 'Missing pub_id in request body'
      })

    const pub = UserPubService.getById(
      req.app.get('db'),
      newUserPub.pub_id
    )
    if(!!pub) 
      return res.status(400).json({
        error: 'User_Pub already exists'
      })
    
    newUserPub.user_id = req.user.id

    UserPubService.insertUserPub(
      req.app.get('db'),
      newUserPub
    )
      .then(() => {
        res.status(201).end()
      })
      .catch(next)
  })

userpubRouter
  .route('/:pub_id')
  .all(requireAuth)
  .delete((req, res, next) => {
    const pub = UserPubService.getById(
      req.app.get('db'),
      req.params.pub_id
    )
    
    if(!pub)
      return res.status(404).json({
        error: 'User_Pub does not exist'
      })

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

module.exports = userpubRouter;