const { Cart } = require("../models");

const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

const getCartList = async (req, res) => {
  return Cart.find().populate("product").populate("user");
};

const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};

const updateCartDetails = async (cartId, reqbody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: reqbody });
};

const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};

module.exports = {
  createCart,
  getCartList,
  getCartById,
  updateCartDetails,
  deleteCart,
};
