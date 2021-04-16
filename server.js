const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

//middleware for jsontype
app.use(express.json());

//routes
app.use("/api", require("./routes/user"));

//connect DB
connectDB();

//run server
app.listen(5000, (err) =>
  err ? console.log(err) : console.log("server is running")
);
