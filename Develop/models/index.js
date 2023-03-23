// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.Category = Product.belongsTo(Category);
// Categories have many Products
Category.Product = Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.Tag = Product.belongsToMany(Tag, {through: ProductTag})
// Tags belongToMany Products (through ProductTag)
Tag.Product = Tag.belongsToMany(Product, {through: ProductTag})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
