import Product from "./product.model";

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find()

        if(products.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Products not found :('
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Products found:', 
                products
            }   
        )
    } catch (e) {
        console.error(e)
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const addNewProduct = async(req, res) => {
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()
        return res.status(200).send(
            {
                success: true,
                message: `Room created successfully`,
                product
            }
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}