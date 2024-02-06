import Products from "../database/model/product.model.js";
import Category from "../database/model/category.model.js";
export const getProductId = async (req, res) => {
    const { id } = req.params;
    try {
        console.log("entrando", id);
        await Products.sync();

        const product = await Products.findOne({
            // va buscar un producto cuyo condicional cohicinda con el id que le pasamos
            where: {
                product_id: id
            }
        });
        if (product) {
            res.status(200).json({
                message: "Product found",
                status: 200,
                product
            });
        } else {
            res.status(404).json({
                message: "Product not found",
                status: 404
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (req, res) => {
    try{
        await Category.sync();
        await Products.sync();
        //buscamos todos los productos
        const products = await Products.findAll();

        res.status(200).json({
            message: "List of products",
            status: 200,
            products
        });
    }
    catch(error){
        console.log(error);
    }
};

export const createProduct = async (req, res) => {
    const { name, price, stock, category} = req.body;
    try{ 
        await Category.sync();
        await Products.sync(); //si la tabla existe no la vuelve a crear, y si no existe la crea.
        const createProducts = await Products.create({
            product_name: name,/*faker.commerce.product() */
            product_price: price,/*faker.commerce.price() */
            is_stock: stock, /*faker.datatype.boolean() */
            category_id: category
        });

        res.status(201).json({
            message: "Product created successfully",
            status: 201,
            createProducts
        });
    }
    catch(error){
        console.log(error);
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;

    try{
        await Products.sync();
        const product = await Products.update({
            product_name: name,
            product_price: price,
            is_stock: stock
        },{
            where: {
                product_id: id
            }
        });

        if(product){
            res.status(200).json({
                message: "Product updated successfully",
                status: 200
            });
        }else{
            res.status(404).json({
                message: "Product not found",
                status: 404
            });
        }
    }
    catch(error){
        console.log(error);
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        await Products.sync();
        const product = await Products.destroy({
            where: {
                product_id: id
            }
        });

        if(product){
            res.status(200).json({
                message: "Product deleted successfully",
                status: 200
            });
        }else{
            res.status(404).json({
                message: "Product not found",
                status: 404
            });
        }
    }
    catch(error){
        console.log(error);
    }
}