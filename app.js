import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import auth from './routes/auth'
import jobs from './routes/jobs'
import csrf from 'csurf';
import cookieParser from 'cookie-parser'
//dotenv initialization
dotenv.config()



// starting the server 
const app=express()

app.use(cookieParser())

//csrf protection
var csrfmiddleware = csrf({ cookie: true })
app.use(csrfmiddleware)


//cors
app.use(cors());


//body parser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ extended: true, limit: "50mb" }));



//cors
app.use(cors());



//connecting DB
mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>console.log('DB connected successfully :)')).catch(err=>console.log('Error connecting the DB'))

// Listening at 
const port=5000
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})


// Routes
app.all("*",(req,res,next)=>{
    res.cookie("XSRF-TOKEN",req.csrfToken())
    next()
})   


app.use('/api',auth)
app.use('/jobs',jobs)


// Demo route
app.get('/',(req,res)=>{
    res.send({csrfToken:req.csrfToken()})
})