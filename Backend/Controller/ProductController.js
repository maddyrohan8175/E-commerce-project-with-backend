const db=require('../DatabaseConfig.js')

exports.saveProduct=(req,res)=>{
    let product_name=req.body.product_name
    let product_type=req.body.product_type
    let product_price=req.body.product_price
    let product_rating=req.body.product_rating
    let product_image=req.file.filename
    let value=[[product_name,product_type,product_price,product_rating,product_image]]
    let sql='insert into product_details(product_name,product_type,product_price,product_rating,product_image) values ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
          res.send('data saved')
        }
    })

}

exports.getProduct=(req,res)=>{
    let sql='select * from product_details'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateProduct=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    console.log(newData)
    let sql='update product_details set ? where id = ?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send('data updated')
        }
    })
}

exports.deleteProduct=(req,res)=>{
    let id=req.params.id
    let sql='delete from product_details where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.send('data deleted')
        }
    })
}

exports.ViewDataById=(req,res)=>{
    let id = req.params.id
    let sql='select * from product_details where id =?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

