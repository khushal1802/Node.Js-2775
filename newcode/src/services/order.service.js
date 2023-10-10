const { Order } = require("../models");

const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

const getOrderList = async (req,res) => {
  return Order.find().populate("cart").populate("product").populate("user");
};

const getOrderByEmail = async (email) => {
  return Order.findOne({ email });
};

const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

const updateOrderDetails = async (orderId, reqbody) => {
  return Order.findByIdAndUpdate(orderId, { $set: reqbody });
};

const deleteOrder = async (OrderId) => {
  return Order.findByIdAndDelete(OrderId);
};

const deleteUserByEmail = async (email) => {
  return User.findOneAndDelete({ email: email });
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateOrderDetails,
  getOrderByEmail,
  deleteOrder,
  deleteUserByEmail,
};
