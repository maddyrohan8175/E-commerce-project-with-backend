const express=require('express')
const ProductController=require('../Controller/ProductController.js')
const routes=express.Router()
const Uploads=require('../multerConfig.js')

routes.post('/save',Uploads.single('product_image'),ProductController.saveProduct)

routes.get('/get',ProductController.getProduct)

routes.put('/update/:id', Uploads.single('product_image'),ProductController.updateProduct)

routes.delete('/delete/:id',ProductController.deleteProduct)

routes.get('/view/:id',ProductController.ViewDataById)


module.exports=routes
