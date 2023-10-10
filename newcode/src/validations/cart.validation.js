const Joi = require("joi");

/** create Cart */
const createCart = {
  body: Joi.object().keys({
    quantity: Joi.number().integer(),
    total_amount: Joi.number().integer(),
    product: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  createCart,
};
