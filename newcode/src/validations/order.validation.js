const Joi = require("joi");

/** create Order */
const createOrder = {
  body: Joi.object().keys({
    order_no: Joi.number(),
    order_date: Joi.string().required().trim(),
    total: Joi.number().integer(),
    email:Joi.string().required().trim(),
    // cart:Joi.string.require().trim(),
    product: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  createOrder,
};
