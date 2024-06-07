import express from 'express'
import route from './routes/userRoutes.js'
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';

/* import connectDB from './config/db.js'; */
dotenv.config();
const app = express();
console.log(process.env.MONGO_URI)
const port = process.env.PORT 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.urlencoded({extended:true}))
connectDB();
/* app.use(protect) */
app.use('/api/user',route)
app.use(notFound);
app.use(errorHandler);
app.get('/',(req,res)=>{
    res.send("sever is ready")
})


app.listen(port,()=>
    console.log(`Server Running successfully on ${port}`)
)