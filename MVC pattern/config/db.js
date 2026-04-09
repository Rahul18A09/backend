import { log } from "console";
import mongoose from "mongoose";
MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/myapp";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("DB Error:", error);
    proccess.exit(1);
  }
};
