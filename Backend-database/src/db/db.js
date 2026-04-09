const mongoose = require("mongoose");


async function connectDB() {

    await mongoose.connect("mongodb+srv://yt:wPi39yitd8uUzfnP@yt-complete-backend.hn2horo.mongodb.net/halley")

    console.log("Connected to DB");
    
}

  module.exports = connectDB;
