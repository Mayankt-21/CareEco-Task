const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker"); // Ensure you're importing faker correctly
const Product = require("./models/Product");
const User = require("./models/User");

dotenv.config();
const connectDB = require("./config/db");

const seedData = async () => {
  try {
    // Connect to the database
    console.log("Connecting to database...");
    await connectDB();
    console.log("MongoDB connected successfully.");

    // Clear existing data
    console.log("Clearing existing data...");
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Existing data cleared.");

    // Seed users
    console.log("Populating users...");
    const users = [];
    for (let i = 0; i < 5; i++) {
      users.push({
        name: faker.person.firstName(), // Updated method for faker
        email: faker.internet.email(),
        password: "123456", // Normally, you would hash the password here
      });
    }

    // Insert users
    const insertedUsers = await User.insertMany(users);
    console.log(`${insertedUsers.length} users populated!`);

    // Seed products
    console.log("Populating products...");
    const products = [];
    for (let i = 0; i < 20; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
      });
    }

    // Insert products
    const insertedProducts = await Product.insertMany(products);
    console.log(`${insertedProducts.length} products populated!`);

    process.exit(0); // Exit successfully
  } catch (error) {
    console.error("Error while seeding data:", error);
    process.exit(1); // Exit with an error code
  }
};

seedData();
