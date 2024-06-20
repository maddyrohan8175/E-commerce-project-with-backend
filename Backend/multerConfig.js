const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:'./Uploads',
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})

module.exports=multer({storage:storage})