const {User} = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getUserList = async (req, res) => {
  return User.find();
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

const updateUserDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUserDetails,
  getUserByEmail,
  deleteUser,
};