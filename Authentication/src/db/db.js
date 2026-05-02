const mongoose = require('mongoose');

async function connectDB() {
    try{

        await mongoose.connect(process.env.MONGO_URL);
        // console.log(process.env.MONGO_URL);
        
        console.log("MongoDB Connected");
        
    }catch (error) {
        console.log("Error:", error)   
    }
}

module.exports = connectDB;