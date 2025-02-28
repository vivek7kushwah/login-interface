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
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index.ejs");
})
// let password = "passwordabc";
// bcrypt.genSalt(10, (err,salt)=>{
//     bcrypt.hash(password,salt, async(err,hash)=>{
//         let user = await userModel.create({
//             userid : "user1",
//             password_hash : hash,
//             role : "basic"
//         })
//     })
// })

app.post("/login",async(req,res)=>{
    let user = await userModel.findOne({userid : req.body.id});
    if (!user) return res.send("something wents wrong id...");

    // console.log("Password from request:", req.body.password);
    // console.log("Hashed password from DB:", user.password_hash);
    if (req.body.password == user.password_hash){
        let id = req.body.id;
        let token = jwt.sign({id},"currentlylogedin");
        res.cookie("token",token);
        // res.send("you login succesfully...");
        let role = user.role ;
        if (role == "admin"){
            // res.send("you are admin");
            let  objects = await userModel.find();
            res.render("data.ejs",{objects : objects})

        }
        else{
            // res.send("you are normal user");
            let  objects = [user]
            res.render("data.ejs",{objects : objects})

        }
    }
    else{
        res.send("something wants wronge pas..")
    }
})
app.listen(3000,(err)=>{
    console.log("server started...");
})



