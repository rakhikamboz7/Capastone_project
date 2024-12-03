require("dotenv").config();
const express = require("express");
const app = express();
const connectDB =require("./db/connect");
const PORT = process.env.PORT || 5002;

const hotels_routes = require("./routes/hotels");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

//middleware or to set router
app.use("/api/hotels", hotels_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log('${PORT} yes it is connected');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
