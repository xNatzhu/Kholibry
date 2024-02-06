import Category from "../database/model/category.model.js";

export const createCategory = async (req, res) => {
    const { name} = req.body;
    try{
        await Category.sync();
        const createCategory = await Category.create({
            category_name: name
        });
        res.status(201).json({
            message: "Category created successfully",
            status: 201,
            createCategory
        });
    }
    catch(error){
        console.log(error);
    }
}

export const getCategory = async (req, res) => {
    try{
        await Category.sync();
        //buscamos todos los productos
        const category = await Category.findAll();

        res.status(200).json({
            message: "Category of products",
            status: 200,
            category
        });
    }
    catch(error){
        console.log(error);
    }
};

