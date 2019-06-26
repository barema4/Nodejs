const express = require('express')
const { body } = require('express-validator/check')

const feedController = require('../controllers/feeds')
const isAuth = require('../middleware/is-auth')
const router = express.Router()

router.get('/post',isAuth, feedController.getPosts)

router.post('/post',[
    body('title')
    .trim()
    .isLength({ min: 5}),
    body('content')
    .trim()
    .isLength({ min: 5})
] ,isAuth, feedController.creatPost)

router.get('/post/:postId',isAuth, feedController.getPost)

router.put('/post/:postId', [
    body('title')
    .trim()
    .isLength({ min: 5}),
    body('content')
    .trim()
    .isLength({ min: 5})
], isAuth, feedController.updatePost)

router.delete('/post/:postId',isAuth , feedController.deletePost)

module.exports = router;