// Modules
const express = require("express");

// Controller functions
const { login, register, getMe, logout } = require("../controllers/auth.controller");

// Utilities
const protect = require("../middlewares/auth.middleware");

const authRouter = express.Router();

// Routes
authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/me", protect, getMe);
authRouter.delete("/logout", protect, logout);

module.exports = authRouter;