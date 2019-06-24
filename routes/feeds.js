const express = require('express')
const { body } = require('express-validator/check')

const feedController = require('../controllers/feeds')

const router = express.Router()

router.get('/post', feedController.getPosts)

router.post('/post',[
    body('title')
    .trim()
    .isLength({ min: 5}),
    body('content')
    .trim()
    .isLength({ min: 5})
] ,feedController.creatPost)

router.get('/post/:postId', feedController.getPost)

router.put('/post/:postId', [
    body('title')
    .trim()
    .isLength({ min: 5}),
    body('content')
    .trim()
    .isLength({ min: 5})
],feedController.updatePost)

router.delete('/post/:postId',feedController.deletePost)

module.exports = router;