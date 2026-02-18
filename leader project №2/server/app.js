const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const productsRouter = require("./routers/products.router");
const authRouter = require("./routers/auth.router");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(morgan("dev"));

// app.use("/api/products", productsRouter);

app.use("/api/users", authRouter);

mongoose.connect("mongodb://localhost:27017/onlineMarket")
    .then(() => {
        console.log("connection to the database was successful");

        app.listen(3000, () => {
            console.log("Server Started!");
        })
    })
    .catch((err) => console.log(err))
