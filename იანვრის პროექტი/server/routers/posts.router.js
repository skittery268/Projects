const express = require("express");
const { createPost, getposts } = require("../controllers/posts.controller");

const postsRouter = express.Router();

postsRouter.post("/", createPost);
postsRouter.get("/", getposts);

module.exports = postsRouter;