// Modules
const jwt = require("jsonwebtoken");

// Utilities
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Middleware to protect routes and ensure that only authenticated users can access them
const protect = catchAsync(async (req, res, next) => {
    const { authToken } = req.cookies;

    if (!authToken) {
        return next(new AppError("You are not logged in! Please log in to get access.", 401));
    }

    const payload = jwt.verify(authToken, process.env.JWT_SECRET);

    if (!payload) {
        return next(new AppError("Invalid token! Please log in again.", 401));
    }

    req.userId = payload.id;

    next();
})

module.exports = protect;