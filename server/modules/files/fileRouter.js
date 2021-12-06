const fileController= require('./fileController')
const router=require('express').Router()
const multer = require('multer')
const path=require('path') //dosya uzantısı için kullandık png jpeg vs.

const storage=multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./uploads/files')
    },
    filename:(req,file,cb) =>{
        const filename=file.originalname.split('.')[0] //resim.png, [0]=resim,[1]=png 
        cb(null,filename+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage}) //hangi hedefe ahngi dosya ismi ile ileteceğimizi belirledik


router.get('/',fileController.get_all)
router.get('/file_count',fileController.file_count)
router.post('/upload',upload.single('file') ,fileController.upload) //file ,upload.single('files')
/************************************************************************************** */
router.get('/bookletGetAll',fileController.get_all2)
router.post('/bookletUpload',fileController.upload2)

/******************************************************************************************* */
router.get('/studentNumberGetAll',fileController.get_all3)
router.post('/studentNumberUpload',fileController.upload3)

/********************************************************************************************* */
router.get('/informationGetAll',fileController.get_all4)
router.post('/informationUpload',fileController.upload4)
/*********************************************************************************************** */
module.exports = router;
