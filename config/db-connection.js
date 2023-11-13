import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error
    }
}

export default dbconnect