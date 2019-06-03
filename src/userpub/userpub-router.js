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
    // UserPubService.userPubByUserId(
    //   req.app.get('db'),
    //   req.user.id
    // )
    //   .then(pub => {
    //     console.log(pub)
    //     const existy = pub.filter(p => p.pub_id == req.params.pub_id)
    //     console.log(existy)
    //     if(existy[0])
    //       return res.status(400).json({
    //         error: 'User_Pub already exists'
    //       })
    //   })
    //   .then(() => {
    //     console.log(`about to insert new userpub: ${req.user.id}, ${req.params.pub_id}`)
    //     UserPubService.insertUserPub(
    //       req.app.get('db'),
    //       req.user.id,
    //       req.params.pub_id
    //     )
    //   })
    //   .then(() => {
    //     res.status(201).end()
    //   })
    //   .catch(next)
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
    // UserPubService.userPubByUserId(
    //   req.app.get('db'),
    //   req.user.id
    // )
    //   .then(pub => {
    //     console.log(pub)
    //     const existy = pub.filter(p => p.pub_id == req.params.pub_id)
    //     console.log(existy)
    //     if(!existy)
    //       return res.status(400).json({
    //         error: 'User_Pub does not exists'
    //       })
    //   })
    //   .then(() => {
    //     console.log('about to delete userpub from db')
    //     UserPubService.deleteUserPub(
    //       req.app.get('db'),
    //       req.user.id,
    //       req.params.pub_id
    //     )
    //   })
    //   .then(() => {
    //     console.log('userpub deleted')
    //     res.status(204).end()
    //   })
    //   .catch(next)
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