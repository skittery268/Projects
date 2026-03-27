const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./routers/auth.router");
const postsRouter = require("./routers/posts.router");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/api/user", usersRouter);
app.use("/api/post", postsRouter);

app.listen(3000, () => {
    console.log("Server Started!");
})