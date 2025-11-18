

const express = require('express')
const { route } = require('./auth-routes')

const router = express.Router()
const adminMiddleware = require('../middleware/admin-middleware')
const authMiddleware = require('../middleware/auth-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController} = require('../controllers/image-controller')
const {fetchImagesController} = require('../controllers/image-controller')


// upload the image

router.post(
    '/upload',
    authMiddleware,
    adminMiddleware,
    uploadMiddleware.single('image'),
    uploadImageController
)

// to get all the images
router.get('/get',authMiddleware,fetchImagesController)


module.exports = router