
const express = require("express");
const mongoose = require("mongoose");
const route = require("./route/route.js");

const app = express();
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Amrata:Y99l58O8175g88R8@cluster0.xictrjh.mongodb.net/Amrata-DB" ,{useNewUrlParser:true})
  .then(() => console.log("mongodb is connected successfully."))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT, function () {
  console.log(`Express app is running on port ${process.env.PORT}`);
});