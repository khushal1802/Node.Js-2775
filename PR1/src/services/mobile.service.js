const { Mobile } = require ("../models");

const createMobile = async (reqBody) => {
  return Mobile.createMobile(reqBody);
};
const getMobilelist = async (req, res) => {
  return Mobile.find({ $or: [{ is_active: true }] });
};

const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

const updateDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};
module.exports = {
  createMobile,
  getMobilelist,
  getMobileById,
  updateDetails,
  deleteMobile,
};
