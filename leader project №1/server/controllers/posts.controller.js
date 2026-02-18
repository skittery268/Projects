const { updateFile, readFile } = require("../utils/file.js");
const path = require("path");

const FILE_URL = path.join(__dirname, "../database/posts.json");

const createPost = (req, res) => {
    const data = req.body;

    if (!data.title || !data.content) {
        return res.status(400).json({ message: "Title and Content are required!" });
    }

    const newPost = { id: Date.now(), ...data };

    updateFile(FILE_URL, newPost);

    res.status(201).json(newPost);
}

const getposts = (req, res) => {
    const { userId } = req.query;

    const posts = readFile(FILE_URL);

    if (userId) {
        const filteredPosts = posts.filter(p => p.userId === parseInt(userId));

        res.status(200).json(filteredPosts);
    } else {
        res.status(200).json(posts);
    }
}

module.exports = { createPost, getposts };