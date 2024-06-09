import Product from '../models/product.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        product.name = req.body.name
        product.price = req.body.price
        product.description = req.body.description
        product.selectedFile = req.body.selectedFile
        await product.save()
        res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        // const product = await Product.findById(req.params.id)
        const product = await Product.findByIdAndDelete(req.params.id);
        // await product.delete()
        res.json({message: "Product deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}