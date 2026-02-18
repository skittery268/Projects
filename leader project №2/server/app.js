const express = require("express");
const cors = require("cors");
const productsRouter = require("./routers/products.router");
const authRouter = require("./routers/auth.router");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/api/products", productsRouter);

app.use("/api/users", authRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})