const xss = require('xss');

const UserPubService = {
  getUserPub(db, userId) {
    return db
      .from('user_pub AS up')
      .select('up.pub_id','up.date_created')
      .where('up.user_id', userId)
      .leftJoin(
        'benrinote_publications AS pub',
        'up.pub_id',
        'pub.id'
      )
      .select(
        'pub.title',
        'pub.cover'
      )
      .orderBy('up.date_created')
  },

  getUserInfo(db, userId) {
    return db
      .from('benrinote_users AS u')
      .select('u.user_name', 'u.nickname', 'u.type')
      .where('u.id', userId)
      .first()
  },

  userPubByUserId(db, user_id) {
    return db
      .from('user_pub')
      .select('pub_id')
      .where('user_id', user_id)
  },

  // bob(db, userId, pubId) {
  //   return db.into('user_pub').insert({ 'user_id': userId, 'pub_id': pubId })
  // },

  insertUserPub(db, user_id, pub_id) {
    console.log(`about to insert ${user_id} and ${pub_id} into user_pub`)
    return db('user_pub').insert({user_id, pub_id})
  },

  deleteUserPub(db, user_id, pub_id) {
    return db
      .from('user_pub')
      .where({
        user_id: user_id,
        pub_id: pub_id
      })
      .delete()
  },

  serializeUserPubs(userPubs) {
    return userPubs.map(this.serializeUserPub)
  },

  serializeUserPub(userPub) {
    return {
      pub_id: userPub.pub_id,
      date_created: userPub.date_created,
      title: xss(userPub.title),
      cover: xss(userPub.cover)
    }
  },
  serializeUserInfo(user) {
    return {
      user_name: xss(user.user_name),
      nickname: xss(user.nickname),
      type: xss(user.type)
    }
  }
}

module.exports = UserPubService;