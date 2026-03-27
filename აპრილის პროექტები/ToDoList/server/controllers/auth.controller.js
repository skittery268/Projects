// Modules
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user.model");

// Utilities
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Controller function to send a JWT token to the client after successful login
const sendToken = (user, res) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    res.cookie("authToken", token, {
        maxAge: process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "Lax"
    });

    user.password = undefined;

    res.status(200).json({
        status: "success",
        message: "User logged in successfully!",
        data: {
            user
        }
    })
}

// Controller function to register a new user in the database
const register = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully!"
    })
})

// Controller function to log in a user and send a JWT token to the client
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new AppError("Credentionals incorrect!", 400));
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return next(new AppError("Credentionals incorrect!", 400));
    }

    sendToken(user, res);
})

// Controller function to auto login a user if they have a valid JWT token
const getMe = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.userId);

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

// Controller function to clear user cookies and log out the user
const logout = catchAsync(async (req, res, next) => {
    res.clearCookie("authToken");

    res.status(200).json({
        status: "success",
        message: "User logged out successfully!"
    })
})

module.exports = { register, login, getMe, logout };