//implementar el ORM
import {Model, DataTypes} from "sequelize";
import sequelize from "../database/config/db.config.js";

class Category extends Model {}

Category.init({
  category_id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize, 
  modelName: 'Category' 
});

export default Category;

