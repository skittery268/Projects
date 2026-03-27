// Models
const Task = require("../models/task.model");

// Utilities
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Controller function to get all user tasks from the database and send them to the client
const getTasks = catchAsync(async (req, res, next) => {
    const tasks = await Task.find({ authorId: req.userId });

    res.status(200).json({
        status: "success",
        data: {
            tasks
        }
    });
});

// Controller function to create a new task in the database and send it to the client
const createTask = catchAsync(async (req, res, next) => {
    const { title, content } = req.body;

    const newTask = await Task.create({ title, content, authorId: req.userId });

    res.status(201).json({
        status: "success",
        message: "Task created successfully",
        data: {
            task: newTask
        }
    });
})

// Controller function to delete a task from the database
const deleteTask = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (task.authorId != req.userId) {
        return next(new AppError("You are not authorized to delete this task", 403));
    }

    await Task.findByIdAndDelete(id);

    res.status(200).json({
        status: "success",
        message: "Task deleted successfully"
    });
})

// Controller function to update a task in the database and send the updated task to the client
const updateTask = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const task = await Task.findById(id);

    if (task.authorId != req.userId) {
        return next(new AppError("You are not authorized to update this task", 403));
    }

    if (title) task.title = title;
    if (content) task.content = content;

    await task.save();

    res.status(200).json({
        status: "success",
        message: "Task updated successfully",
        data: {
            task
        }
    });
})

const changeStatus = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findById(id);

    if (task.authorId != req.userId) {
        return next(new AppError("You are not authorized to update this task", 403));
    }

    task.status = status;

    await task.save();

    res.status(200).json({
        status: "success",
        message: "Task status updated successfully",
        data: {
            task
        }
    });
})

module.exports = { getTasks, createTask, deleteTask, updateTask, changeStatus };