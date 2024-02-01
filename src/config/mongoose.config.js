const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err?.message ?? "Failed DB Connection");
  });
