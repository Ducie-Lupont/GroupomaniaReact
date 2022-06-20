const router = require('express').Router()
const postController = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer()

router.post('/', upload.single('file'), postController.createPost)
router.get('/', postController.readPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.patch('/like-post/:id', postController.likePost)
router.patch('/unlike-post/:id', postController.unlikePost)

router.patch('/comment-post/:id', postController.commentPost)

module.exports = router