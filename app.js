import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import auth from './routes/auth'
// import cors from "cors";
//dotenv initialization
dotenv.config()


// starting the server 
const app=express()

//cors
// app.use(cors());


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


//Routes
app.use('/api',auth)

// Demo route
app.get('/',(req,res)=>{
    res.send('Great..!')
})