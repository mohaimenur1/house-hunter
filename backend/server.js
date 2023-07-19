const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const houses = require("./models/houseModel");

dotenv.config();

connectDB();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", async (req, res) => {
  const housesData = await houses.find({});
  res.json({ housesData });
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id: tourId } = req.params;

    const singleHouse = await houses.findById({ _id: tourId });
    res.status(201).json({
      status: "success",
      data: {
        house: singleHouse,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "please provide proper link",
    });
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
