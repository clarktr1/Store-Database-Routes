const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true, 
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 10,
            isNumeric: true,  
        },
        category_id:{
            type: DataTypes.STRING,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product',
    },
)

module.exports = Product;