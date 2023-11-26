import mongoose from "mongoose";

const dbConnection = async () => {
 try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://career123:WqDXM0WH28aYZ8kM@cluster2.ygsrngf.mongodb.net/")

console.log("DB connected successfully"); 
} catch (error) {
    console.log("DB Error: " + error)
 }

}