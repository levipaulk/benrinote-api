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
  },

  getUserInfo(db, userId) {
    return db
      .from('benrinote_users AS u')
      .select('u.user_name', 'u.nickname', 'u.type')
      .where('u.id', userId)
      .first()
  },

  getById(db, id) {
    return UserPubService.getUserPub(db, userId)
      .where('up.pub_id', id)
      .first()
  },

  insertUserPub(db, newUserPub) {
    return db
      .insert(newUserPub)
      .into('user_pub')
  },

  deleteUserPub(db, user_id, pub_id) {
    return db
      .where({
        user_id,
        pub_id
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