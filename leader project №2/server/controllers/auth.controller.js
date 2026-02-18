const User = require("../models/user.model");

// login user
const login = async (req, res) => {
    const userInfo = req.body;
    
    const user = await User.findOne({ "email": userInfo.email, "password": userInfo.password });

    if (!user) {
        return res.status(404).json({ message: "Password or email incorrect!" });
    }

    res.status(200).json({ ...user._doc, password: undefined });
}

// register new user
const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!password || !email) {
        return res.status(400).json({ message: "Password and email are required to register!" });
    }

    const isExist = await User.findOne({ "email": email });

    if (isExist) {
        return res.status(400).json({ message: "This user already exist!" });
    }

    const user = User.create({ name, email, password });

    res.status(201).json({ ...user, password: undefined });
}

// edit user info
const editInfo = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if (body.name) await User.updateOne({ _id: id }, { name: body.name });
    if (body.email) await User.updateOne({ _id: id }, { email: body.email });
    if (body.image) await User.updateOne({ _id: id }, { image: body.image });

    const user = await User.findById(id);

    res.status(200).json(user);
}

module.exports = { login, register, editInfo };