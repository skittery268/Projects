// Modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Global error handler
const globalErrorHandler = require("./controllers/error.controller");

// Configs
const connectDB = require("./configs/mongo.config");

// Routers
const authRouter = require("./routers/auth.router");
const tasksRouter = require("./routers/tasks.router");

const app = express();

// Helper middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser());

// Routers
app.use("/api/auth", authRouter);
app.use("/api/tasks", tasksRouter);

// Global Error Handler
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}!`);

    connectDB();
})