import express, { Router } from "express"
import  mainRoutes from './server/routes/main.js';
import adminRoutes from "./server/routes/admin.js"
import path from "path"
const app = express()
const port = process.env.PORT || 3000
import methodOverride from "method-override"
import expressEjsLayouts from "express-ejs-layouts"
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./server/config/db.js";
import session from "express-session";



connectDB() 


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
cookieParser()
session({
    secret : "keyboard cat" , 
    resave : false,
    saveUninitialized : true , 
    store : MongoStore.create({
        mongoUrl : process.env.MONGODB_URI
    })
})
    
           
 
app.use(express.static("public"))

// Templating use 
app.set("view engine" , "ejs")
app.use(expressEjsLayouts)
app.set('layout', './layouts/main')
app.use('/', mainRoutes);
app.use('/', adminRoutes);
app.use(methodOverride("_method"))

 
 
 

app.listen(port , (res , req) => {   
    console.log(`listening on ${port}`)
})

