const path = require("path");
const { readFile, updateFile } = require("../utils/file");

const FILE_URL = path.join(__dirname, "../database/users.json");

const registerUser = (req, res) => {
    const data = req.body;

    const users = readFile(FILE_URL);

    const isExist = users.find(u => u.userEmail === data.userEmail);

    if (isExist) {
        return res.status(400).json({ message: "User already exist!" });
    }

    const id = Date.now();

    const newUser = { id, ...data };

    updateFile(FILE_URL, newUser);

    res.status(201).json({ ...newUser, userPassword: undefined });
}

const loginUser = (req, res) => {
    const data = req.body;

    const users = readFile(FILE_URL);

    const user = users.find(u => u.userEmail === data.userEmail && u.userPassword === data.userPassword);
    
    if (!user) {
        return res.status(400).json({ message: "Email or password invallid!" });
    }

    res.status(200).json({ ...user, userPassword: undefined });
}

module.exports = { registerUser, loginUser };