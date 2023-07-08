import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
// import path from 'path'

//pass : mk0dsWGiINJqz77m


const app = express()

//config env
dotenv.config()
const PORT = process.env.PORT || 5050;

//middleware 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
// app.use(express.static(path.join(__dirname, '../client/build')))


//rest api
app.get('/', (req, res) =>{
    res.send(`this is a mern stack project`)
})




//server run
app.listen(PORT, ()=> {
    console.log(`Server Running on ${PORT}`.bgGreen);
    connectDB()
})