//* ************ Image Upload Configuration *************\\
const multer = require('multer')
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname)
  }
})
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
}
const upload = multer({storage: storage, fileFilter: imageFilter})

const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: 'druqy5mzo',
  api_key: '883111296716657',
  api_secret: 'UQV5mtfFs5zccfpXP02kthMdY-4'
})
//* ************ END Image Upload Config *************\\

// export upload and cloudinary
module.exports = {
  cloudinary: cloudinary,
  upload: upload
}