const Product = require("../models/product.model");

// get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// create new product
const createProduct = async (req, res) => {
    try {
        const { title, description, imageUrl, price, quantity } = req.body;
    
        if (!title || !description || !imageUrl || !price || !quantity) {
            return res.status(400).json({ message: "Product title, description, image, price and quantity are required!" });
        }

        const newProduct = await Product.create({ title, description, imageUrl, price, quantity });

        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// delete product
const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await Product.deleteOne({ _id: id });

        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// edit product
const editProduct = async (req, res) => {
    const { title, description, imageUrl, quantity, price } = req.body;
    const id = parseInt(req.params.id);

    if (title) await Product.updateOne({ _id: id }, { title });
    if (description) await Product.updateOne({ _id: id }, { description });
    if (imageUrl) await Product.updateOne({ _id: id }, { imageUrl });
    if (quantity) await Product.updateOne({ _id: id }, { quantity });
    if (price) await Product.updateOne({ _id: id }, { price });

    const product = await Product.findById(id);

    res.status(200).json(product);
}

module.exports = { getAllProducts, createProduct, deleteProduct, editProduct };