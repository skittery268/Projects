// Modules
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author ID is required"]
    },
    status: {
        type: String,
        enum: ["Active", "In Progress", "Completed", "Closed"],
        default: "Active"
    }
})

// Create task model to communicate with the tasks collection in the database
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;