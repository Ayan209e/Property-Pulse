import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
    mongoose.set('strict',true);

    // If the database is already connected, don't connect again
    if (connected) {
        console.log("MongoDB is already connected...");
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDb connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}