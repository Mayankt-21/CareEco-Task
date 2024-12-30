const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import models
const User = require("./models/User");
const Product = require("./models/Product");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Populate Users
const populateUsers = async () => {
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }
  await User.insertMany(users);
  console.log("Users populated!");
};

// Populate Products
const populateProducts = async () => {
  const products = [];
  for (let i = 0; i < 50; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
    });
  }
  await Product.insertMany(products);
  console.log("Products populated!");
};

// Seed Data
const seedData = async () => {
  await connectDB();
  await User.deleteMany(); // Clear existing users
  await Product.deleteMany(); // Clear existing products
  await populateUsers();
  await populateProducts();
  mongoose.connection.close();
};

seedData();
