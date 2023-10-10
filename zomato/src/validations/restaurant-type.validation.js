const Joi = require("joi");

/** Create Restaurant-type */
const createRestaurant_type = {
  body: Joi.object().keys({
    restaurant_type: Joi.string().required().trim(),
    type_desc: Joi.string().required().trim(),
  }),
};

module.exports = { createRestaurant_type };
