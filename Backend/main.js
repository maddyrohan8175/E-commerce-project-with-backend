const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const ProductRoutes=require('./Routes/ProductRoutes.js')
let db=require('./DatabaseConfig.js')
let app=express()
app.use(express.json())
app.use(cors())
app.use(express.static('Uploads'))
app.use(express.static('public'))
app.use('/api',ProductRoutes)

dotenv.config({
    path:'./.env'
})

let hostname="127.0.0.1"


db.connect((err)=>{
    if(err) throw err
    else{
        console.log('database Connected')
    }
})

let creatTable=`create table if not exists product_details(
    id int primary key not null auto_increment,
    product_name varchar(255),
    product_type varchar(255),
    product_price varchar(255),
    product_rating varchar(255),
    product_image varchar(255)
);
`
db.query(creatTable,(err,result)=>{
    if(err) throw err
    else{
        console.log('table created')
    }
})

app.listen(process.env.port, hostname,()=>{
console.log(`http://${hostname}:${process.env.port}`)
})
