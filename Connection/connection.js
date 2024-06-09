import mongoose from "mongoose";

const connection = async () => {
    try {
        const URL = process.env.CONNECTION_URL
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error: ", error.message)
    }
}
export default connection