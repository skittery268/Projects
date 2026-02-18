// get all products
const getAllProducts = (req, res) => {
    const products = readFile(fileUrl);

    res.status(200).json(products);
}

// create new product
const createProduct = (req, res) => {
    const content = req.body;
    
    if (!content.title || !content.description || !content.imageUrl || !content.count) {
        return res.status(400).json({ message: "Product title, description, image and product count are required!" });
    }

    const newProduct = { id: Date.now(), ...content };

    writeFile(fileUrl, newProduct);

    res.status(201).json(newProduct);
}

// delete product
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const products = readFile(fileUrl);

    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product Not Found!" });
    }

    deleteInfo(fileUrl, productIndex);

    res.status(204).json();
}

// edit product
const editProduct = (req, res) => {
    const body = req.body;
    const id = parseInt(req.params.id);

    const products = readFile(fileUrl);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product Not Found!" });
    }

    if (body.title) product.title = body.title;
    if (body.description) product.description = body.description;
    if (body.imageUrl) product.imageUrl = body.imageUrl;
    if (body.count) product.count = body.count;

    fs.writeFileSync(fileUrl, JSON.stringify(products));

    res.status(200).json(product);
}

module.exports = { getAllProducts, createProduct, deleteProduct, editProduct };