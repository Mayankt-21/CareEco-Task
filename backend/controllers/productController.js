const Product = require("../models/Product");

// Existing getAllProducts function (unchanged)
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching product details" });
  }
};

// New searchProducts function (added)
const searchProducts = async (req, res) => {
  const { query } = req.query;

  try {
    const results = await Product.aggregate([
      {
        $search: {
          index: "prods_search", // Specify the name of your index
          compound: {
            should: [
              {
                text: {
                  query,
                  path: "name", // Search on name field
                  fuzzy: {
                    maxEdits: 2,
                    prefixLength: 1,
                  },
                },
              },
              {
                text: {
                  query,
                  path: "category", // Search on category field
                  fuzzy: {
                    maxEdits: 1,
                    prefixLength: 1,
                  },
                },
              },
              {
                text: {
                  query,
                  path: "description", // Search on description field
                },
              },
            ],
          },
        },
      },
      { $limit: 10 },
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).json({ message: "Search failed" });
  }
};

module.exports = {
  getAllProducts,
  getProductById, // Assuming this function already exists
  searchProducts, // Add this new function
};
