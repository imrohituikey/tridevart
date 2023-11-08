import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'

const app = express();

dotenv.config();

//connecting to database
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('Connected to database')})
.catch((err)=>{console.log(err)});

//routes
app.use(express.json());
app.use('/api/user',userRouter);

//app listening
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
});

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })
});
