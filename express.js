const express = require("express");

const app=express()

app.get('/',(req,res)=>{
    // res.json("json rendered text")
    let employees=[
        {id:1,name:'Ismayil',age:21},
        {id:2,name:'Ferid',age:21},
        {id:3,name:'Tural',age:21}
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})
