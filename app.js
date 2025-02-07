const express = require('express');
const path = require('path')
const app = express();
const cookieParser =require('cookie-parser');
app.use(cookieParser());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs= require('fs');
const userModel = require('./usermodules');
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view.engine','ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs");
})
app.post("/login",async(req,res)=>{
    let user = await userModel.findOne({userid : req.body.id});
    if (!user) return res.send("something wents wrong...");
    bcrypt.compare(req.body.password,user.password,function(err,result){
        if (err) return res.send("internal server error...");
        if (result){
            let id = req.body.id;
            let token = jwt.sign({id},"currentlylogedin");
            res,cookie("token",token);
            res.send("you login succesfully...");
        }
    });
    
})
app.listen(3000,(err)=>{
    console.log("server startat");
})



