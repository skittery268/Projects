
// Modules
const express = require("express");

// Controller functions
const { getTasks, createTask, deleteTask, updateTask, changeStatus } = require("../controllers/tasks.controller");

// Utilities
const protect = require("../middlewares/auth.middleware");

const tasksRouter = express.Router();

// Routes
tasksRouter.get("/", protect, getTasks);
tasksRouter.post("/", protect, createTask);
tasksRouter.delete("/:id", protect, deleteTask);
tasksRouter.patch("/changestatus/:id", protect, changeStatus);
tasksRouter.patch("/:id", protect, updateTask);

module.exports = tasksRouter;