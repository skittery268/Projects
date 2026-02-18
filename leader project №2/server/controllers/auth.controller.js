const { readFile, writeFile } = require("../utils/file");
const path = require("path");
const fs = require("fs");

const fileUrl = path.join(__dirname, "../database/users.json");

// login user
const login = (req, res) => {
    const userInfo = req.body;

    const users = readFile(fileUrl);
    
    const user = users.find(u => u.email === userInfo.email && u.password === userInfo.password);

    if (!user) {
        return res.status(404).json({ message: "Password or email incorrect!" });
    }

    res.status(200).json({ ...user, password: undefined });
}

// register new user
const register = (req, res) => {
    const userInfo = req.body;

    if (!userInfo.password || !userInfo.email) {
        return res.status(400).json({ message: "Password and email are required to register!" });
    }

    const users = readFile(fileUrl);

    const isExist = users.find(u => u.email === userInfo.email);

    if (isExist) {
        return res.status(400).json({ message: "This user already exist!" });
    }

    const user = { id: Date.now(), role: "user", ...userInfo };

    writeFile(fileUrl, user);

    res.status(201).json({ ...user, password: undefined });
}

// edit user info
const editInfo = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;

    const users = readFile(fileUrl);

    const user = users.find(u => u.id === id);

    if (body.name) user.name = body.name;
    if (body.email) user.email = body.email;
    if (body.image) user.image = body.image;

    fs.writeFileSync(fileUrl, JSON.stringify(users));

    res.status(200).json(user);
}

module.exports = { login, register, editInfo };