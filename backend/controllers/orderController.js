const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const userId = req.user; // Get the user ID from the token (via auth.js middleware)

    // Check stock availability for the products
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product || product.stock < item.quantity) {
        return res
          .status(400)
          .json({ message: `Not enough stock for ${product.name}` });
      }
    }

    // Create the order
    const newOrder = new Order({
      userId,
      products,
      totalAmount,
      status: "Processing", // Default order status
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    // Fetch the order by ID and populate the product details
    const order = await Order.findById(req.params.id).populate(
      "products.productId"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Ensure the order belongs to the logged-in user
    if (order.userId.toString() !== req.user.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    // Fetch the order by ID
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Ensure the order belongs to the logged-in user
    if (order.userId.toString() !== req.user.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Cancel the order by updating the status
    order.status = "Cancelled";
    await order.save();

    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
