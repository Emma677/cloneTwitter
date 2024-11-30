import mongoose from "mongoose";

const connectMongoDB = async(req,res)=>{
    try {
        const connections = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${connections.connection.host}`)
    } catch (error) {
        console.log("error connecting to mongoDB",error)
        process.exit(1)
    }
}

export default connectMongoDB