import express from "express";
import authRoutes from "./routes/authRoutes.js"
import mongoose from "mongoose";
import dotenv from "dotenv"
import connectMongoDB from "./db/mongoDB.js";

dotenv.config()

const app = express();
const port = process.env.PORT

// app.use(express.json())

app.use("/api/auth",authRoutes)





app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
    connectMongoDB()
})