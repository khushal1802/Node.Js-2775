const { Product } = require("../models");

const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

const getProductList = async (req,res) => {
  return Product.find()
};

const getProductById = async (productId) => {
  return Product.findOne({ _id: productId })
};

const updateProduct = async (productId, reqBody) => {
  return Product.findOneAndUpdate(
    { _id: productId },
    { $set: reqBody }
  );
};

const manageProductStatus = async (productId) => {
  const productExists = await getProductById(productId);
  if (!productExists) {
    throw new Error("Product not found!");
  }

  return Product.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        is_active: !productExists.is_active,
      },
    },
    { new: true }
  );
};

const deleteProduct = async (productId) => {
  return Product.findOneAndDelete({ _id: productId });
};

module.exports = {
  getProductById,
  getProductList,
  createProduct,
  updateProduct,
  manageProductStatus,
  deleteProduct,
};