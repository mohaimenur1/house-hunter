const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const path = require("path");

const houses = require("./models/houseModel");
const userRoute = require("./routes/userRoute");

dotenv.config();

connectDB();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

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

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use("/api/users/register", userRoute);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
