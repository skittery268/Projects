// Modules
const mongoose = require('mongoose');

// Function to connect to the MongoDB database using Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;