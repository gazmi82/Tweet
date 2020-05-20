const router = require('express').Router()
const passport = require('passport')
const Post = require('../models/Post')

router.route('/add').post(passport.authenticate('jwt', { session: false}),
(req, res) => {
  const text = req.body.text.trim()
  res.send('Test 01')
  const newPost = new Post({
    user: {
      id: req.user.id,
      login: req.user.login
    },
    text
  })
  newPost.save()
    .then(post => res.json(post))
    .catch(err => console.log(err))
})

router.route('/').get((req, res) => {
  Post.find().sort({ createAt: -1 })
  .then(posts => res.json(posts))
  .catch(err => console.log(err))
})

module.exports = router
