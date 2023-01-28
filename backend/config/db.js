//Used to connect to mongodb using mongoose
const mongoose = require("mongoose");

const connectDB = async () => {     //All mongoose methods are asynchronous and returns promise
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;