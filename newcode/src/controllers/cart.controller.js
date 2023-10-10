const { cartService, emailService } = require("../services");

/** create cart */
const createCart = async (req, res) => {
  try {
    const cart = await cartService.createCart(reqBody);
    if (!cart) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "cart create successfully!",
      data: { cart },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get cart list */
const getCartList = async (req, res) => {
  try {
    const getList = await cartService.getCartList(req, res);

    res.status(200).json({
      success: true,
      message: "Get cart list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update cart
const updateCartDetails = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartExists = await cartService.getCartById(cartId);
    if (!cartExists) {
      throw new Error("cart not found!");
    }

    await cartService.updateCartDetails(cartId, req.body);

    res
      .status(200)
      .json({ success: true, message: "cart details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete cart */
const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartExists = await cartService.getCartById(cartId);
    if (!cartExists) {
      throw new Error("cart not found!");
    }

    await cartService.deleteCart(cartId);

    res.status(200).json({
      success: true,
      message: "cart delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCart,
  getCartList,
  updateCartDetails,
  deleteCart,
};
