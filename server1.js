import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose, { Schema, mongo } from "mongoose";

import bodyParser from "body-parser";
import dotenv from "dotenv"
import pkg from 'body-parser';
import bcrypt from "bcrypt"
import session from 'express-session';
import multer from "multer";
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';





const { json } = pkg;
dotenv.config();
// const username = process.env.MONGODB_USERNAME;
// const password = process.env.MONGODB_PASSWORD;
// mongoose.connect(`mongodb+srv://${username}:${password}@portfoliogen.emzz7tb.mongodb.net/portfolio`)
const app = express() ;
// const MongoDBStoreSession = MongoDBStore(session);

// const storage = multer.memoryStorage(); // Save the file in memory as a Buffer
// const upload = multer({ storage: storage });
const port =process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.json())
ed
const monguri = `mongodb+srv://${username}:${password}@cluster0.suqnipw.mongodb.net/LoginRegDB`
const store = new MongoDBStore({
  uri: monguri,
  collection: 'sessions',
});

app.use(session({ secret: 'halwaaaabhengan102001200120001', resave: true, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'halwaaaabhengan102001200120001',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: null }
}));

//path 


app.get('/',(req,res)=>{
    if (res.session.email){
      // res.render('index1.html',{loggedin:true})
      res.sendFile(__dirname+"/views/index2.html")
    }
    else{  
      // res.render('index.html',{loggedin:false}) } 
      res.sendFile(__dirname+"/views/index2.html")
  }})
  
  























app.listen(port,()=>{
    console.log("Listeingin at port 5000");
})