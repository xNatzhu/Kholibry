//implementar el ORM
import {Model, DataTypes} from "sequelize";
import Category from "./category.model.js";
import sequelize from "../database/config/db.config.js";

class Product extends Model {}

// Inicializar el modelo
Product.init({
  Id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_price: {
    type: DataTypes.FLOAT(10,2),
    allowNull: false
  },
  is_stock:{
    type: DataTypes.BOOLEAN,
  },

}, {
  // Other model options go here
  sequelize, // llamamos al metodo sequelize
  modelName: 'Product' //le agregamos el nombre al modelo
});

Category.hasMany(Product,{
  foreignKey: "Id",
  sourceKey: "Id"
});

Product.belongsTo(Category, {
  foreignKey: "Id"
});


export default Product;



/*test de conexion*/
/*async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}

testConnection() 
*/


//https://sequelize.org/docs/v6/getting-started/