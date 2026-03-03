import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import passport from './passport.js';
import session from "express-session";

import {connectDB} from "./config/db.js"

import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

// Create App
const app = express();

//add session
app.use(session({
  secret: "keyboard cat", //random string to signature the session ID cookie
  resave: false,         
  saveUninitialized: false
}));

//Set Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// initialize passport
app.use(passport.initialize());
app.use(passport.session()); 

export function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/")
}

// Routes
app.use('/', userRoutes);
app.use('/users/:userId/notes', noteRoutes);

// Error Handling
app.use((req,res, next) =>{
    const err = new Error("We don't have this API route in our app");
    err.status = 401;
    next(err);
});

app.use((err, req, res, next)=> {
    const statusCode = err.status|| 500;
    res.status(statusCode).json({
        ERROR:{
            statusCode: statusCode,
            message: err.message
        }
    })
});

//DB 
await connectDB(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});