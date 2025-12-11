const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://venkatkorumilli27:venkat123@cluster0.5wge51t.mongodb.net/edupoly_leads"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Connection Failed", err);
  }
};

module.exports = connectDB;
