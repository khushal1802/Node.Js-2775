
const { orderService, emailService } = require("../services");
const ejs = require("ejs");
const path = require("path");

/** create order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const orderExists = await orderService.getOrderByEmail(reqBody.email);
    if (orderExists) {
      throw new Error("order already created by this email!");
    }

    ejs.renderFile(
      path.join(__dirname, "../views/otp-template.ejs"),
      {
        email: reqBody.email,
        otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
        order_no: reqBody.order_no,
        order_date: reqBody.order_date,
        total: reqBody.total,
      },
      async (err, data) => {
        if (err) {
          let orderCreated = await orderService.getOrderByEmail(reqBody.email);
          if (orderCreated) {
            await orderService.deleteOrderByEmail(reqBody.email);
          }
          throw new Error("Something went wrong, please try again.");
        } else {
          emailService.sendMail(reqBody.email, data, "Verify Email");
        }
      }
    );
    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "order create successfully!",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get order list */
const getOrderList = async (req, res) => {
  try {
    const getList = await orderService.getOrderList(req, res);

    res.status(200).json({
      success: true,
      message: "Get order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update order
const updateOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }

    await orderService.updateOrderDetails(orderId, req.body);

    res
      .status(200)
      .json({ success: true, message: "order details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete order */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }

    await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  updateOrderDetails,
  deleteOrder,
};