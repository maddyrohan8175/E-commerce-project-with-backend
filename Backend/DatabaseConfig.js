const mysql=require('mysql')
let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ramram",
    database:"ecom"
})

module.exports=connection