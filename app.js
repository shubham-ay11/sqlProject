const express= require('express');
const mysql = require('mysql');
//Crearte my sql connect

const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123',
    database:"magentis2"

});
//Connect
db.connect((err) => {
if(err)
{
    console.log(err);
}
else

console.log("MySql Connected...");
})

const app=express();

//Create Db

app.get('/createdb',(req,res)=>{

    let sql="CREATE DATABASE firstsql";
    db.query(sql,(err,result)=>{

        if(err)
        console.log(err);
        
        else 
        console.log(result);
        res.send('Database created...');

    })

});
//Create Table
// app.get('/createnamestable', (req,res)=>{
//     let sql= "CREATE TABLE customers ( id int AUTO_INCREMENT,name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))";
//     db.query(sql,(err,result)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log(result);
//         res.send('Table created...');

//     })


// });


//Insert data

app.get('/adddata1', (req,res)=>{
let data={
    booster_code: 1,
    booster_name:"shubham",
    booster_rank:"noob",
    other:"other"
}
var sql = "INSERT INTO addbooster SET ?";
db.query(sql,data,(err,result) =>{
if(err)
console.log(err);
else
console.log(result);
res.send("Data inserted successfully");

})

})

app.listen(3000, ()=>{

    console.log('server started on Port 3000 ')
});